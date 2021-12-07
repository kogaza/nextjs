import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBHvC3rV4jpggkUKGoFs--w5Dcvey16-p8",
    authDomain: "nextfire-bdfcd.firebaseapp.com",
    projectId: "nextfire-bdfcd",
    storageBucket: "nextfire-bdfcd.appspot.com",
    messagingSenderId: "740220402157",
    appId: "1:740220402157:web:b550f6e381dadbeed94fe4",
    measurementId: "G-J2DRK1BDTD"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();
