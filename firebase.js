import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLVWHyIreA5cL7Z2spj_NIhMX93DbJVLE",
  authDomain: "tinder-clone-2d712.firebaseapp.com",
  projectId: "tinder-clone-2d712",
  storageBucket: "tinder-clone-2d712.appspot.com",
  messagingSenderId: "102579167015",
  appId: "1:102579167015:web:762bdfa4c71149427c5302",
  measurementId: "G-T97KNVWR4J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
