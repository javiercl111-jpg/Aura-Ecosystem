import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
import { initializeFirestore } from "firebase/firestore";

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
  }
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  if (import.meta.env.DEV) {
    const configuredDebugToken =
      import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN?.trim();

    window.FIREBASE_APPCHECK_DEBUG_TOKEN =
      configuredDebugToken && configuredDebugToken.length > 0
        ? configuredDebugToken
        : true;
  }

  const recaptchaSiteKey =
    import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim();

  if (recaptchaSiteKey) {
    initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaEnterpriseProvider(recaptchaSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  } else {
    console.warn(
      "APP_CHECK_CONFIGURATION_REQUIRED: VITE_RECAPTCHA_SITE_KEY is not configured.",
    );
  }
}

export const db = initializeFirestore(firebaseApp, {
  experimentalAutoDetectLongPolling: true,
});