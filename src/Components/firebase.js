// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOlraNiHNhx4ZUzT9Lsxou37oFcIwSKd4",
  authDomain: "clone-695d6.firebaseapp.com",
  projectId: "clone-695d6",
  storageBucket: "clone-695d6.appspot.com",
  messagingSenderId: "657125668778",
  appId: "1:657125668778:web:3a64512f426552bdd45dd3",
  measurementId: "G-5PWCFE42RB",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export {auth, db};


