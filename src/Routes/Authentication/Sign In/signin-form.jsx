import { useState } from "react";
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

  const signinwithgoogle = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    await createUserDocumentFromAuth(user);
    // console.log(user);
    alert("Sign in Successful");
  };
  const [formfield, setformfield] = useState(defaultformfield);
  const { email, password } = formfield;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfield({ ...formfield, [name]: value });
  };
  console.log(formfield);

  // Creating User From Email And Password
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Invalid Credentials");
    }
    try {
      const response = await signInAuthuserfromEmailandPassword(
        email,
        password
      );
      alert("Sign in Successful");
      console.log(response);
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

          <div className="btn-wrap">
            <Buttons children={"Login"} type={"submit"} />
            <Buttons
              type={"button"}
              children={"Login with Google"}
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
