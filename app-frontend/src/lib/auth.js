import { auth } from '$lib/firebase.js';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

export function login() {
  signInWithRedirect(auth, provider);
}

export function logout() {
  auth.signOut();
}

export function checkLogin(onLogin, onLogout) {
  onAuthStateChanged(auth, (user) => {
    if (user) onLogin(user);
    else onLogout();
  });
}
