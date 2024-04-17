import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Style
import './index.css';

// Components
import App from './Components/App';

// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdY2lTk8V5sB3OtIcAXA8buaJJb4Z4LLM",
  authDomain: "info442-green-beans.firebaseapp.com",
  projectId: "info442-green-beans",
  storageBucket: "info442-green-beans.appspot.com",
  messagingSenderId: "559268238931",
  appId: "1:559268238931:web:fb1fffaca13bb60b1dd8a6",
  measurementId: "G-HE770KJ3CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
