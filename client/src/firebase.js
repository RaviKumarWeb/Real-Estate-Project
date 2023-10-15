// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-840eb.firebaseapp.com",
  projectId: "mern-estate-840eb",
  storageBucket: "mern-estate-840eb.appspot.com",
  messagingSenderId: "944043049901",
  appId: "1:944043049901:web:679bcd76e9675869ecd724",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
