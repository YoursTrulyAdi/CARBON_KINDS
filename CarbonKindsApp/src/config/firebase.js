// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxkv78sx41-sCeE73P21mPp55ENeGX8VM",
    authDomain: "demoappfirebase-f430f.firebaseapp.com",
    projectId: "demoappfirebase-f430f",
    storageBucket: "demoappfirebase-f430f.firebasestorage.app",
    messagingSenderId: "159062868164",
    appId: "1:159062868164:web:cebffb3f8096fdb33d8991",
    measurementId: "G-GVGJG2E80T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);