import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFjCyIUDQ7rPy6ZA_eUSkV56OIVc9fabY",
  authDomain: "smart-student-chatify.firebaseapp.com",
  projectId: "smart-student-chatify",
  storageBucket: "smart-student-chatify.appspot.com",
  messagingSenderId: "105724558028",
  appId: "1:105724558028:web:6d9776ee5fe4ae2b862069",
  measurementId: "G-F7FJTW1E1L"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firbase.auth();

export { db, auth };