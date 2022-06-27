import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";
// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.js"
const Signin = () => {
  const logGoogleuser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page is here</h1>
      <button onClick={logGoogleuser}>Sign in with Google</button>
    </div>
  );
};

export default Signin;
