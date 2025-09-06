// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiRW_Xd9ln-U6zS0T0qTCUJtdOYImjP8Q",
  authDomain: "carbonkinds-db.firebaseapp.com",
  projectId: "carbonkinds-db",
  storageBucket: "carbonkinds-db.firebasestorage.app",
  messagingSenderId: "596151592337",
  appId: "1:596151592337:web:80dbf78a715d8782e8a630",
  measurementId: "G-15WF2G5JMH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
