// firebase configuration key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZxNRhNYlTF77Za29HhVuHS0JgP-5j7qw",
  authDomain: "gaurdy-main-12a50.firebaseapp.com",
  databaseURL: "https://gaurdy-main-12a50-default-rtdb.firebaseio.com",
  projectId: "gaurdy-main-12a50",
  storageBucket: "gaurdy-main-12a50.appspot.com",
  messagingSenderId: "746941067369",
  appId: "1:746941067369:web:665092445f57b4ae30f2f8",
  measurementId: "G-FEJ48MXYRF"
};




if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
