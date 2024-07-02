// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdDuFVWzbZZgqOHfEK2i5pNPeSm1775Q0",
  authDomain: "moyuri-akther9.firebaseapp.com",
  projectId: "moyuri-akther9",
  storageBucket: "moyuri-akther9.appspot.com",
  messagingSenderId: "257708880580",
  appId: "1:257708880580:web:1b6128dcd0c21569e44f91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
