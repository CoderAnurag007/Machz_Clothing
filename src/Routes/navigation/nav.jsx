import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Crwnlogo from "../../assets/Mach-Z-removebg-preview.png";
import "./nav.style.scss";
import { SignoutUser } from "../../utils/firebase/firebase";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CardDropdown from "../../components/card-dropdown/card-dropdown";
import { cartcontext } from "../../context/cartcontext";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(cartcontext);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={Crwnlogo} alt="" id="logoimg" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={"/contact-us"}>
            Contact
          </Link>
          {currentUser ? (
            <span id="nav-link-span" onClick={SignoutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/sign-in"}>
              Signin/Signup
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
