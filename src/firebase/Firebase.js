import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0YQF9X02tP02u-PCFucNasNLEgBFAJtk",
  authDomain: "crwn-e-commerse.firebaseapp.com",
  databaseURL: "https://crwn-e-commerse.firebaseio.com",
  projectId: "crwn-e-commerse",
  storageBucket: "crwn-e-commerse.appspot.com",
  messagingSenderId: "960835941786",
  appId: "1:960835941786:web:7d51669b3b322c39e4b623",
  measurementId: "G-1YS9JN7RK4",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
