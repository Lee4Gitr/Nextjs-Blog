import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBiOajoA_8fRfSrgymd9pEWVVEJNGeUIxs",
  authDomain: "aubrey-blog.firebaseapp.com",
  projectId: "aubrey-blog",
  storageBucket: "aubrey-blog.appspot.com",
  messagingSenderId: "74007278838",
  appId: "1:74007278838:web:475f9a9e16beed022328d7",
  measurementId: "G-QSNH8T7MCS"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
