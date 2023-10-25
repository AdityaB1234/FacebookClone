// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBae0CLTJbReVE1oYtG1TSRBTfjWVBvnrM",
  authDomain: "fb-fullstack-b4a05.firebaseapp.com",
  projectId: "fb-fullstack-b4a05",
  storageBucket: "fb-fullstack-b4a05.appspot.com",
  messagingSenderId: "101619832157",
  appId: "1:101619832157:web:f64175e5e78a47acdfc4b4",
  measurementId: "G-YEJ16SNPFR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export default db;
  export {auth, provider};
  