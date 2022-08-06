import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Crwnlogo from "../../assets/Mach-Z-removebg-preview.png";
// import "./nav.style.jsx";
import { SignoutUser } from "../../utils/firebase/firebase";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CardDropdown from "../../components/card-dropdown/card-dropdown";
import { cartcontext } from "../../context/cartcontext";
import {
  LogoContainer,
  Logoimage,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from "./nav.style";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(cartcontext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logoimage src={Crwnlogo} alt="" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/contact-us"}>Contact</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={SignoutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={"/sign-in"}>Signin/Signup</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
