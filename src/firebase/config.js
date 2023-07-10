import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiPg_Uvd4IAS6yrUt7_EasDcivPgcS3ag",
    authDomain: "fb9-reading-list-197d2.firebaseapp.com",
    projectId: "fb9-reading-list-197d2",
    storageBucket: "fb9-reading-list-197d2.appspot.com",
    messagingSenderId: "74348971969",
    appId: "1:74348971969:web:6712ed96bdf5af27fed140"
  };

  // init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

export { db }