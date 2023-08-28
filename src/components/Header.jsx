import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../redux/userDetailsSlice";

import logo from "../assets/redbuyers_logo.png";
import hamburger from "../assets/ion_menu.svg";

const Header = () => {
  const token = localStorage.getItem("isLoggedIn");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    dispatch(setLogin(false));
    navigate("/");
  };

  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo d-flex">
            <span className="hamburger" onClick={toggleHamburgerMenu}>
              <img src={hamburger} alt="Hamburger"></img>
            </span>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#">
                  Sell
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="/buy-home">
                  Buy
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <div className="login-register d-flex align-items-center">
            {token !== "false" ? (
              <Link to="#" onClick={handleLogout} className="login">
                <span>Logout</span>
              </Link>
            ) : (
              <>
                <Link className="btn-login " to={"/login"}>
                  Login
                </Link>
                <button className="btn btn-primary go_to_register">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
