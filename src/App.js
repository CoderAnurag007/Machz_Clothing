import Home from "./Routes/home/homepage";
import { Route, Routes } from "react-router-dom";
import Nav from "./Routes/navigation/nav";
import Signin from "./Routes/SigninSignup-parent/sign.component.jsx";
import Contact from "./Routes/contact us/contact-us.component";
import Shop from "./components/Shop/shop";
import CheckOut from "./Routes/checkout/checkout";
import { Fragment } from "react";
import { GlobalStyle } from "./index.style";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthchangedlistener,
  // getdocumentfromcollection,
} from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user-action";
// import { setCategories } from "./store/category/category.action";
// import { createAsyncThunk } from "@reduxjs/toolkit";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthchangedlistener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));

      console.log(" from app ");
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-in" element={<Signin />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
