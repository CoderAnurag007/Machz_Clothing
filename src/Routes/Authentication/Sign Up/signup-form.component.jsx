import { useState } from "react";
import Forminput from "../../../components/form-Input/form-input.component";
import {
  createAuthuserfromEmailandPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase";
import Buttons from "../../../components/buttons/button.component";
import "./signup.style";
import { BtnWrapSignUp } from "./signup.style";

const Signup = () => {
  //  Signing with GooglePopup requires SigninwithGooglePopup function and createUserDocumentFromAuth function

  //  Signing with Googleredirect requires SigninwithGoogleredirect function and createUserDocumentFromAuth function

  const defaultformfield = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formfield, setformfield] = useState(defaultformfield);
  const { displayName, email, password, confirmPassword } = formfield;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfield({ ...formfield, [name]: value });
    console.log(formfield);
  };

  console.log("Hitted the mark");
  // Creating User From Email And Password
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Pass not match");
      return;
    }
    try {
      const response = await createAuthuserfromEmailandPassword(
        email,
        password
      );
      const { user } = response;
      console.log(response);
      await createUserDocumentFromAuth(user, { displayName });
      setformfield(defaultformfield);
      alert("Thankyou For Connecting With Us");
    } catch (error) {
      // Handle Errors here.
      if (error.code === "auth/email-already-in-use") {
        alert("email Already exists");
      } else {
        console.log("error is encountered in creation of the user", error);
      }
    }
  };
  return (
    <>
      <div>
        <h2>Don't Have Account</h2>
        <span>Create new Account</span>
        <form action="" onSubmit={handleSubmit}>
          <Forminput
            label="Name"
            inputOptions={{
              type: "text",
              id: "name",
              required: true,
              name: "displayName",
              value: displayName,
              onChange: handleChange,
            }}
          />
          <Forminput
            label="Email"
            inputOptions={{
              type: "email",
              id: "email",
              required: true,
              name: "email",
              value: email,
              onChange: handleChange,
            }}
          />
          <Forminput
            label="Password"
            inputOptions={{
              type: "password",
              id: "pass",
              required: true,
              name: "password",
              value: password,
              onChange: handleChange,
            }}
          />
          <Forminput
            label="Confirm Password"
            inputOptions={{
              type: "password",
              id: "confpass",
              required: true,
              name: "confirmPassword",
              value: confirmPassword,
              onChange: handleChange,
            }}
          />
          <BtnWrapSignUp>
            <Buttons children={"Sign Up"} type={"submit"} />
          </BtnWrapSignUp>
        </form>
      </div>
    </>
  );
};

export default Signup;
