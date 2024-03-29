import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Crwnlogo from "../../assets/Mach-Z-removebg-preview.png";
import Expand from "../../assets/icons8-warcraft-iii-50.png";
// import "./nav.style.jsx";
import { SignoutUser } from "../../utils/firebase/firebase";
import { useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon";
import CardDropdown from "../../components/card-dropdown/card-dropdown";
import { cartcontext } from "../../context/cartcontext";
import { useSelector } from "react-redux";
import {
  LogoContainer,
  Logoimage,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  ExpandImg,
} from "./nav.style";
import { selector } from "../../store/user/user.selector";
import { useEffect } from "react";

const Nav = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selector);
  const { isCartOpen } = useContext(cartcontext);
  const [width, setwidth] = useState();
  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logoimage src={Crwnlogo} alt="" />
        </LogoContainer>
        {width < 520 ? (
          // <img src={Expand} alt="" className="expand_nav" />
          <ExpandImg src={Expand} />
        ) : (
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
        )}
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
