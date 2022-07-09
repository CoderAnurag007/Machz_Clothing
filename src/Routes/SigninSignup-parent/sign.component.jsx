import React from "react";
import SignIn from "../Authentication/Sign In/signin-form.jsx";
import Signup from "../Authentication/Sign Up/signup-form.component.jsx";
import "./sign.component.scss";

const Signin = () => {
  return (
    <>
      <div className="signin-container">
        <SignIn />
        <Signup />
        {/* <button onClick={logGoogleuser}></button> */}

        {/* <button onClick={logGoogleuserRedirect}>
      </button> */}
        {/* <Buttons children={"Sign in with Google redirect"} /> */}
      </div>
    </>
  );
};

export default Signin;
