import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6bxGQx63sz9uyAiDC-UUKtfL-R5FQCEM",
    authDomain: "project-2-c8917.firebaseapp.com",
    projectId: "project-2-c8917",
    storageBucket: "project-2-c8917.appspot.com",
    messagingSenderId: "981031787608",
    appId: "1:981031787608:web:00b3e068461f896622be2d"
  };

  // Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();
const db = firebaseapp.firestore();

export { auth, provider, storage, db }


