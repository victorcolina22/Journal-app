import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkhNaLbS6EXLFcTGg3AaQmgWz8FgINiyA",
    authDomain: "journal-app-ff719.firebaseapp.com",
    projectId: "journal-app-ff719",
    storageBucket: "journal-app-ff719.appspot.com",
    messagingSenderId: "980332664258",
    appId: "1:980332664258:web:8429bb238722923990f25b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Base de datos de firebase
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}