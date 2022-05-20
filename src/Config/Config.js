import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAqTm6MeE0UI6JAoeu9cBfj9LDFMWKhySY",
    authDomain: "bright-traders.firebaseapp.com",
    projectId: "bright-traders",
    storageBucket: "bright-traders.appspot.com",
    messagingSenderId: "798171727613",
    appId: "1:798171727613:web:556112bb903220b0a92094",
    measurementId: "G-DHVJ6RMN5K"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export {auth,fs,storage}