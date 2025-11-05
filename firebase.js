import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebasestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdO-mqKekLwSzjgw6Wa-ChxDPUFFoJtKM",
  authDomain: "contact-form-d0219.firebaseapp.com",
  projectId: "contact-form-d0219",
  storageBucket: "contact-form-d0219.firebasestorage.app",
  messagingSenderId: "920001508097",
  appId: "1:920001508097:web:a9fb7f2c4d943a6252a100",
  measurementId: "G-8N5T6BWE4R"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirebasestore(app);

export default app;