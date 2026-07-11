# Aura Launch Readiness: Executive Intake Contract Audit

**Fecha:** 2026-07-11
**Fase:** L1 - Integración Control Center
**Estado Final:** `CONTROL_CENTER_BACKEND_CHANGE_REQUIRED`

---

## 1. Estado de la Auditoría y Bloqueo Arquitectónico
Tras una auditoría exhaustiva en el entorno local y en los repositorios accesibles, se determinó que **el código fuente del backend (Firebase Functions) de Aura Control Center no está disponible en este entorno de trabajo** (la ruta `functions/src/` no existe localmente). 

Por lo tanto, se declara un bloqueo arquitectónico real por falta de acceso al código fuente para validación estática. 

> **ESTADO: CONTROL_CENTER_BACKEND_CHANGE_REQUIRED**
> No se pudo auditar el código real de `resolveAdvisorByCode` ni `createDiscoveryLead` debido a la ausencia del directorio `functions` en el repositorio local. Se requiere acceso al repositorio oficial del backend o que el equipo de Control Center implemente los adaptadores descritos a continuación.

---

## 2. Contratos Ideales vs. Realidad Asumida

Debido a que Aura Ecosystem ya implementó las llamadas (`httpsCallable` en `us-central1`), definimos el adaptador y los ajustes mínimos que el backend de Control Center **debe** cumplir para garantizar que la integración funcione.

### A. `resolveAdvisorByCode`
**Región requerida:** `us-central1`
**Autenticación:** Pública (sin Auth), pero protegida por App Check.

El backend **debe** devolver una respuesta sanitizada:
```typescript
{
  status: "VALID" | "INVALID";
  advisorDisplayName?: string;
  publicMessage?: string;
}
```
**Reglas que Control Center debe asegurar internamente:**
- Normalizar `commercialCode`.
- Validar que el status del asesor sea `ACTIVE`.
- **Nunca** devolver `uid` ni `advisorId` interno.
- Para códigos suspendidos o inexistentes, devolver siempre `INVALID` genérico.

### B. `createDiscoveryLead`
**Payload requerido desde Aura Nexus:**
```typescript
{
  entryMode: "WEBSITE" | "ADVISOR_SHARE";
  commercialCode?: string;
  companyName: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone?: string;
  state: string;
  city: string;
  employeeRange: string;
  origin: "WEBSITE";
  acquisitionSource: "AURA_NEXUS";
  privacyConsent: { value: boolean, capturedAt: string, policyVersion: string, source: string };
  diagnosticDeliveryConsent: { value: boolean, capturedAt: string, policyVersion: string, source: string };
  followUpConsent: { value: boolean, capturedAt: string, policyVersion: string, source: string };
  marketingConsent: { value: boolean, capturedAt: string, policyVersion: string, source: string };
}
```

---

## 3. Configuración Requerida en Control Center

### App Check (Cross-Application)
- **Provider:** ReCaptcha Enterprise.
- **Dominios Permitidos:** `auranexus.io`, `www.auranexus.io`, y dominios Vercel de producción.
- **Enforcement:** Las funciones `resolveAdvisorByCode` y `createDiscoveryLead` deben tener `enforceAppCheck: true`.
- **Aura Nexus:** Necesitará la variable `VITE_RECAPTCHA_SITE_KEY` configurada en Vercel, usando la Site Key generada para la Web App específica de Nexus en el proyecto `aura-control-center-debb3`.

### CORS y Callables
Como Nexus invocará las funciones desde otro dominio, Control Center debe asegurarse de que sus Cloud Functions permitan peticiones desde los orígenes de Aura Nexus. En Ecosystem, se debe actualizar la CSP (`connect-src`) para permitir llamadas a `https://us-central1-aura-control-center-debb3.cloudfunctions.net`.

### Idempotencia
Control Center **debe** implementar validación de idempotencia (por ejemplo, previniendo la creación de múltiples `market_discovery_links` para el mismo correo/dominio corporativo dentro de un tiempo de gracia de 24h), ya que la responsabilidad de evitar duplicidad real recae en el backend.

---

## 4. Respuesta Sanitizada de `createDiscoveryLead`

Control Center **no debe** devolver Trust Score, UIDs, IP hash, ni razones de seguridad.
Debe enviar el contrato seguro esperado por Aura Nexus:

```typescript
{
  status: "SUCCESS" | "CORPORATE_HANDOFF" | "REVIEW_PENDING" | "ERROR";
  nextAction: "REDIRECT_DISCOVERY" | "SHOW_CORPORATE_WELCOME" | "SHOW_REVIEW_PENDING";
  discoveryUrl?: string; // Formato estricto: https://controlcenter.auranexus.io/discover/{linkId}?access={oneTimeToken}
  advisorDisplayName?: string;
  organizationProfile?: "LOCAL" | "MULTISITE" | "CORPORATE" | "UNKNOWN";
}
```
Si el motor de `organizationProfile` no está completo en backend, debe retornar `UNKNOWN`.

---

## 5. Mapeo de Errores Seguros (Safe Errors)

Traducción requerida de códigos `httpsCallable` a errores controlados en Aura Nexus:
- `invalid-argument` → `INVALID_INPUT` o `INVALID_ADVISOR_CONTEXT`
- `resource-exhausted` → `RATE_LIMITED`
- `unauthenticated` (Si falta token App Check) → `APP_CHECK_REQUIRED`
- Cualquier otro fallo interno (`internal`, `deadline-exceeded`) → `TEMPORARILY_UNAVAILABLE`

No se deben devolver stack traces bajo ninguna circunstancia.

---

## 6. Plan E2E y Cambios Mínimos Requeridos

**Bloqueos actuales a resolver:**
1. **Acceso al Repositorio:** Facilitar el acceso a las funciones de `Aura Control Center` para validar e implementar el adapter si es necesario.
2. **App Check:** Generar Site Key ReCaptcha Enterprise y configurarla en Vercel (`VITE_RECAPTCHA_SITE_KEY`).
3. **CSP:** Ajustar las políticas de seguridad en Nexus.

**Plan E2E (Runner de Contratos):**
Una vez las funciones estén disponibles y adaptadas:
- Validar submission con Advisor Activo/Inactivo.
- Validar rate limiting.
- Simular falla de App Check (removiendo header).
- Verificar que `discoveryUrl` se genera correctamente con tokens de un solo uso.
- Validar sanitización de payload de respuesta (asegurar que no haya fuga de `uid`).
