import { useState, useContext } from "react";
import Forminput from "../../../components/form-Input/form-input.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInAuthuserfromEmailandPassword,
} from "../../../utils/firebase/firebase";
import Buttons from "../../../components/buttons/button.component";
import { signInWithGooglePopup } from "../../../utils/firebase/firebase";

const SignIn = () => {
  const defaultformfield = {
    email: "",
    password: "",
  };

  const [formfield, setformfield] = useState(defaultformfield);
  const signinwithgoogle = async () => {
    const response = await signInWithGooglePopup();
    // const { user } = response;
    // await createUserDocumentFromAuth(user);
    // console.log(user);
    alert("Sign in Successful");
  };
  const { email, password } = formfield;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfield({ ...formfield, [name]: value });
  };

  // Creating User From Email And Password
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Invalid Credentials");
    }
    try {
      const { user } = await signInAuthuserfromEmailandPassword(
        email,
        password
      );
      try {
        setformfield(defaultformfield);
      } catch (e) {
        console.log(e.message);
      }
      alert("Sign in Successful");
    } catch (error) {
      alert("Please Enter Valid Credentials");
    }
  };
  return (
    <>
      <div>
        <h2>Already Have Account</h2>
        <span>Login Here</span>
        <form action="" onSubmit={handleSubmit}>
          <Forminput
            label="Email"
            inputOptions={{
              type: "email",
              id: "email123",
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
              id: "pass123",
              required: true,
              name: "password",
              value: password,
              onChange: handleChange,
            }}
          />

          <div className="btn-wrap">
            <Buttons children={"Login"} type={"submit"} />
            <Buttons
              type={"button"}
              children={"Sign In with Google"}
              buttonstyle={"google"}
              click={signinwithgoogle}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
