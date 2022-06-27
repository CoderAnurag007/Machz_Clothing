import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Crwnlogo from "../../assets/Mach-Z-removebg-preview.png";
import trollybag from "../../assets/icons8-send-64.png";
import "./nav.style.scss";

const Nav = () => {
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
          <Link className="nav-link" to={"/sign-in"}>
            Sign In
          </Link>
          <Link className="nav-link" to={"/shop"}>
            <img id="trollybag" src={trollybag} alt="" />
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
