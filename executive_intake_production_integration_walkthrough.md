# Executive Intake Production Integration Walkthrough

## 1. Firebase App Utilizada
Se está reutilizando la instancia principal de Firebase configurada en `src/firebase/config.ts` ya que el proyecto `VITE_FIREBASE_PROJECT_ID` configurado es directamente `aura-control-center-debb3`. Las Cloud Functions se invocan correctamente apuntando a `us-central1`.

## 2. App Check Registration Requerida
**AURA_NEXUS_FIREBASE_WEB_APP_REGISTRATION_REQUIRED**: Se detectó que el proyecto en Vercel requiere obligatoriamente tener configurado ReCaptcha Enterprise. En el gateway (`FirebaseExecutiveIntakeGateway.ts`), se bloquea el submit instantáneamente si `VITE_RECAPTCHA_SITE_KEY` está ausente, previniendo fallos en etapas tardías del ciclo de vida.

## 3. Variables Vercel (Auditoría)
Las siguientes variables son obligatorias en producción:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID` (aura-control-center-debb3)
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_RECAPTCHA_SITE_KEY`

Se ha eliminado la necesidad de duplicar variables bajo un prefijo distinto (`VITE_CONTROL_CENTER_...`) al tratarse del mismo `PROJECT_ID`.

## 4. Gateway Productivo
El archivo `gateways/index.ts` garantiza que en entornos donde `import.meta.env.PROD` sea verdadero, sea imposible instanciar `FixtureExecutiveIntakeGateway`, protegiendo la plataforma de data simulada o falseada en producción. La inyección de dependencias ahora respeta ciclos limpios.

## 5. Contratos
- **resolveAdvisorByCode:** Se envía `commercialCode`. La respuesta es parseada para mapear los flujos sin exponer PII o status interno innecesario.
- **createDiscoveryLead:** El payload fue ajustado para enviar propiedades planas, se añadió `origin`, `entryMode`, y los consentimientos booleanos estrictos requeridos, junto con un `idempotencyKey` UUIDv4 estable.

## 6. Errores y Mapeo Seguro
No existen fallbacks ocultos. El error `functions/resource-exhausted` se mapea a `RATE_LIMITED` (publicMessage `TEMPORARILY_UNAVAILABLE`), y el error de `App Check` se mapea a `APP_CHECK_REQUIRED`. Estos muestran mensajes recuperables en `IntakeExperience` y retienen el estado original sin destruir los datos previamente tipeados por el usuario.

## 7. Idempotencia
Se genera el `idempotencyKey` usando `crypto.randomUUID()` una única vez en la inicialización del `IntakeContext`, manteniendo su estabilidad frente a re-renders o reintentos de red durante todo el ciclo de vida del componente.

## 8. Redirección Segura
En `ExecutiveWelcome.tsx`, se valida la URL del payload antes de inyectarla a `window.location.href`. Únicamente se acepta el protocolo `https:`, un hostname exacto de `controlcenter.auranexus.io`, y un pathname inicial de `/discover/`. Si es inválido, el botón de CTA no se renderiza y la redirección automática se aborta.

## 9. CSP (Content Security Policy)
El `connect-src` debe permitir a `https://us-central1-aura-control-center-debb3.cloudfunctions.net`.

## 10. Pruebas y Build
- TypeScript: PASS (0 errores en ExecutiveWelcome y pasillos adyacentes)
- Vite Build: PASS (781ms)
- Polling para estado `PROCESSING` configurado a 5 reintentos respetando `retryAfterSeconds`.
- Doble submit bloqueado a nivel `IntakeContext`.

## 11. Procedimiento de Deploy
El sistema local ya probó exitosamente la build productiva (`npm run build`). No se ha ejecutado `vercel deploy` por instrucciones directas, reteniendo el código en `git` para escrutinio en L2.

## 12. Procedimiento E2E
1. Validar el registro de Web App en Firebase para obtener el site-key.
2. Añadir variables en Vercel.
3. Desplegar Aura Nexus a `auranexus.io`.
4. Ejecutar validación funcional con usuario prueba y confirmar llegada a Aura Discovery.

## 13. Estado Final
`ECOSYSTEM_PRODUCTION_INTEGRATION_READY` y `AURA_NEXUS_APP_CHECK_CONFIGURATION_REQUIRED`.
