import { browser } from '$app/env';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIuXtfdufz4jdUGDtynU8ZBFVDGPNAKRA",
  authDomain: "stim-263c5.firebaseapp.com",
  projectId: "stim-263c5",
  storageBucket: "stim-263c5.appspot.com",
  messagingSenderId: "598240107567",
  appId: "1:598240107567:web:cd2346d973d1dbbceb7ada",
  measurementId: "G-G484XEMXG7"
};

const app = initializeApp(firebaseConfig);
let auth = null;
let db = null;

if (browser) {
  auth = getAuth(app);
  db = getFirestore(app);
}

export { app, auth, db };
