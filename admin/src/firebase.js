// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLHJTecuLj6sGhp0YYciTfgU1tSO5vAJQ",
  authDomain: "ass-redux.firebaseapp.com",
  projectId: "ass-redux",
  storageBucket: "ass-redux.appspot.com",
  messagingSenderId: "44129770496",
  appId: "1:44129770496:web:4fa5a6dd5005dfbd508ce5",
  measurementId: "G-14P0VKGK6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;