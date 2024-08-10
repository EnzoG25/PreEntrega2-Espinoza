import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3SpZWhqOGYbdtz6FjXGay23EgFurB0CQ",
    authDomain: "proyectofinal-espinoza.firebaseapp.com",
    projectId: "proyectofinal-espinoza",
    storageBucket: "proyectofinal-espinoza.appspot.com",
    messagingSenderId: "200776980914",
    appId: "1:200776980914:web:67ebca3db8ca714f5dacab"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
