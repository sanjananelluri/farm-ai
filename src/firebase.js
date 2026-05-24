import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCx_KbenUnxrckafjJgzk7mK41zoBKUoGk",
    authDomain: "farm-ai-36bd2.firebaseapp.com",
    projectId: "farm-ai-36bd2",
    storageBucket: "farm-ai-36bd2.firebasestorage.app",
    messagingSenderId: "1052084830380",
    appId: "1:1052084830380:web:5f92496e7d6e9b133d1f09",
    measurementId: "G-19J7ER8NEZ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);