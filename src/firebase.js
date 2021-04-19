import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWENSw-z1uZ0upfKxjXengKfN_-1WEikk",
  authDomain: "vet-messenger.firebaseapp.com",
  projectId: "vet-messenger",
  storageBucket: "vet-messenger.appspot.com",
  messagingSenderId: "406749944766",
  appId: "1:406749944766:web:d3c759edce65608689b7ef",
  measurementId: "G-7YXPP9LEWF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
