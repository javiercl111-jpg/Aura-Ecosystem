import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

// STATUS: APP_CHECK_CONFIGURATION_REQUIRED
// Se requiere VITE_RECAPTCHA_SITE_KEY para operar de forma segura en producción
if (typeof window !== 'undefined') {
  if (import.meta.env.DEV) {
    // Debug token for development
    // @ts-ignore
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }
  
  if (import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
    initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true
    });
  } else {
    console.warn("⚠️ APP_CHECK_CONFIGURATION_REQUIRED: No recaptcha site key found. Backend functions will reject requests in production without App Check.");
  }
}

export const db = initializeFirestore(firebaseApp, {
  experimentalAutoDetectLongPolling: true,
});