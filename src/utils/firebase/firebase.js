import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, { displayName, email, createdAt });
    } catch (e) {
      console.log(e.message);
    }
  } else {
    console.log("User Already Exists");
  }

  return userDocref;
};
