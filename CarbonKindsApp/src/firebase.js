

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiRW_Xd9ln-U6zS0T0qTCUJtdOYImjP8Q",
  authDomain: "carbonkinds-db.firebaseapp.com",
  projectId: "carbonkinds-db",
  storageBucket: "carbonkinds-db.firebasestorage.app",
  messagingSenderId: "596151592337",
  appId: "1:596151592337:web:80dbf78a715d8782e8a630",
  measurementId: "G-15WF2G5JMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
