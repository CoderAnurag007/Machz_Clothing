import { useState } from "react";
import Forminput from "../../components/form-Input/form-input.component";
import {
  createAuthuserfromEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const Signup = () => {
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
  };
  console.log(formfield);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Pass not match");
      return;
    }
    try {
      console.log("pass matched");
      const response = await createAuthuserfromEmailandPassword(
        email,
        password
      );
      const { user } = response;
      console.log("1");
      await createUserDocumentFromAuth(user, { displayName });

      alert("Thankyou for Connecting With us");
    } catch (error) {
      // Handle Errors here.
      if (error.code == "auth/email-already-in-use") {
      } else {
        console.log("error is encountered in creation of the user", error);
      }
    }
  };
  return (
    <>
      <div>
        <h1>Sign Up With Email and Password</h1>
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

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
