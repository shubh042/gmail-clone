import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6_q-k8EOD9Sc3Pj7JCEOvl3ht1rnsCm4",
    authDomain: "clone-685b5.firebaseapp.com",
    projectId: "clone-685b5",
    storageBucket: "clone-685b5.appspot.com",
    messagingSenderId: "177690054609",
    appId: "1:177690054609:web:0818f130f48912bd2f5af0"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , provider };
  