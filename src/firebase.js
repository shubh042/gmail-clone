import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyBLTCmREH1721yObudoBNP6dYcZ1aiVtpc",
      authDomain: "chat-pdf-7e36a.firebaseapp.com",
      projectId: "chat-pdf-7e36a",
      storageBucket: "chat-pdf-7e36a.appspot.com",
      messagingSenderId: "287055962278",
      appId: "1:287055962278:web:36c0d66cb32d81aa4bd467"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db , auth , provider };
  
