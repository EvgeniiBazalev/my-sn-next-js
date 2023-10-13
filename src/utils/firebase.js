// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHBqT0s53clCbU_cmXfqLrHS9VTEdVKmQ",
  authDomain: "eabazalevwebstudioapp.firebaseapp.com",
  databaseURL:
    "https://eabazalevwebstudioapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eabazalevwebstudioapp",
  storageBucket: "eabazalevwebstudioapp.appspot.com",
  messagingSenderId: "621782852708",
  appId: "1:621782852708:web:278609e3312b82cc022b71",
  measurementId: "G-WH2KB8GWLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
