import React from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithgoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";
// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.js"
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import Signup from "./signup-form.component.jsx";
import Buttons from "../../components/buttons/button.component.jsx";
const Signin = () => {
  useEffect(() => {
    const output = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocref = await createUserDocumentFromAuth(response.user);
      }
    };
    output();
  }, []);

  const logGoogleuser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    const userDocref = await createUserDocumentFromAuth(user);
  };
  const logGoogleuserRedirect = async () => {
    const response = await signInWithgoogleRedirect();
    const { user } = response;
  };

  return (
    <div>
      <Signup />
      {/* <button onClick={logGoogleuser}></button> */}
      <Buttons children={"Sign in with Google"} buttontype={"google"} />
      {/* <button onClick={logGoogleuserRedirect}>
      
      </button> */}
      {/* <Buttons children={"Sign in with Google redirect"} /> */}
    </div>
  );
};

export default Signin;
