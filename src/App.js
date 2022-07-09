import "./App.css";
import "./categories.styles.scss";
import Home from "./Routes/home/homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Routes/home/Shop";
import Nav from "./Routes/navigation/nav";
import Signin from "./Routes/SigninSignup-parent/sign.component.jsx";
import Contact from "./Routes/contact us/contact-us.component";
// import "./mystyles.style.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
