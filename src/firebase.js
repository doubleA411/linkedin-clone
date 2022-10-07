import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
 

const firebaseConfig = {
    apiKey: "AIzaSyB8BvspOa8blbYTnTq443nBYaAhKdiDxdI",
    authDomain: "linkedin-clone-946f8.firebaseapp.com",
    projectId: "linkedin-clone-946f8",
    storageBucket: "linkedin-clone-946f8.appspot.com",
    messagingSenderId: "1079674089647",
    appId: "1:1079674089647:web:a729f210e10b3bd2bba45a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export {db }