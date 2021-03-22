import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmNtatWzUVEUPaTld6M7dYrsNvcnJTgGQ",
  authDomain: "react-ecom-app-f98aa.firebaseapp.com",
  projectId: "react-ecom-app-f98aa",
  storageBucket: "react-ecom-app-f98aa.appspot.com",
  messagingSenderId: "801131951157",
  appId: "1:801131951157:web:367324a7a4e3ae077f2d7c",
  measurementId: "G-BY6G965K5J",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
