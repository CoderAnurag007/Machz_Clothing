import Home from "./Routes/home/homepage";
import { Route, Routes } from "react-router-dom";
import Nav from "./Routes/navigation/nav";
import Signin from "./Routes/SigninSignup-parent/sign.component.jsx";
import Contact from "./Routes/contact us/contact-us.component";
import Shop from "./components/Shop/shop";
import CheckOut from "./Routes/checkout/checkout";
import { Fragment } from "react";
import { GlobalStyle } from "./index.style";

const App = () => {
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
