import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
//  web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA0mz3q-HNZbKoK0-WOpVM-7VclG-aRCb8",
  authDomain: "machz-clothing-db.firebaseapp.com",
  projectId: "machz-clothing-db",
  storageBucket: "machz-clothing-db.appspot.com",
  messagingSenderId: "502496341963",
  appId: "1:502496341963:web:e97257d7120ba7cd66504e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);

export const signInWithgoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalinformation = {}
) => {
  if (!userAuth) return;
  const userDocref = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
        ...additionalinformation,
      });
    } catch (e) {
      console.log(e.message);
    }
  } else {
    console.log("User Already Exists");
  }

  return userDocref;
};

export const createAuthuserfromEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
