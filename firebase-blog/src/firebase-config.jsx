// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJuf8gg-QvvVQ5Ke0AB04O_yY58XEhc4E",
  authDomain: "fir-blog-24fcf.firebaseapp.com",
  projectId: "fir-blog-24fcf",
  storageBucket: "fir-blog-24fcf.firebasestorage.app",
  messagingSenderId: "214831664971",
  appId: "1:214831664971:web:2b55f74ac797b64a1fe2ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
