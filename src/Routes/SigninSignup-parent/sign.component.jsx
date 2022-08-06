import React from "react";
import SignIn from "../Authentication/Sign In/signin-form.jsx";
import Signup from "../Authentication/Sign Up/signup-form.component.jsx";
import "./sign.component.style.jsx";
import { SignInContainer } from "./sign.component.style.jsx";

const Signin = () => {
  return (
    <>
      <SignInContainer>
        <SignIn />
        <Signup />
      </SignInContainer>
    </>
  );
};

export default Signin;
