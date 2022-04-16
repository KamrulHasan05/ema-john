// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvA1lr29A1HEmMLAsmVYA9yxRhHzpy39g",
    authDomain: "ema-jhon-simple-47716.firebaseapp.com",
    projectId: "ema-jhon-simple-47716",
    storageBucket: "ema-jhon-simple-47716.appspot.com",
    messagingSenderId: "555922126405",
    appId: "1:555922126405:web:2892c6a353ba8deeb0d52c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;