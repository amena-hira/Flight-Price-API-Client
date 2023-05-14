// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHuf26JCYr1hfujtRruuluumaH84PDiAY",
  authDomain: "flight-api-21922.firebaseapp.com",
  projectId: "flight-api-21922",
  storageBucket: "flight-api-21922.appspot.com",
  messagingSenderId: "1034134811034",
  appId: "1:1034134811034:web:bf2970e3c8719eaf044a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;