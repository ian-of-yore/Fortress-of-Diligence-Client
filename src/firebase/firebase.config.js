// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS2uec9UBVEdFVXBQGdTBqoUgobckZCek",
    authDomain: "fortress-of-diligence-4fb6d.firebaseapp.com",
    projectId: "fortress-of-diligence-4fb6d",
    storageBucket: "fortress-of-diligence-4fb6d.appspot.com",
    messagingSenderId: "168762396776",
    appId: "1:168762396776:web:2bb59d887656605f942bdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;