import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
