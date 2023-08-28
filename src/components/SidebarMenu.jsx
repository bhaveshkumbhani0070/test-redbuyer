import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import marker from "../assets/marker.png";

const SidebarMenu = (props) => {
  const isLoggedIn = useAuth();

  const handleLogout = () => {
    props.sideBarLogout();
  };

  return (
    <div className="sd-body">
      {/* Buy & Sell Section */}
      <div className="buy-sell">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="icon-color text-uppercase">Buy & Sell</h6>
          <span className="icon-color">
            <i className="fa fa-caret-up"></i>
          </span>
        </div>
        <ul className="list-unstyled font-small grey-color">
          <li>Sell</li>
          <li>
            <Link to="/" className="grey-color">
              Browse Homes
            </Link>
          </li>
          <li>Cash Offer</li>
          <li>Buy</li>
          <li>New Construction</li>
          <li>Pricing</li>
          <li>Down Payment</li>
        </ul>
      </div>
      {/* Company Section */}
      <div className="company">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="icon-color text-uppercase">Company</h6>
          <span className="icon-color">
            <i className="fa fa-caret-up"></i>
          </span>
        </div>
        <ul className="list-unstyled font-small grey-color">
          <li>About</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Vendors</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      {/* Locations Section */}
      <div className="locations">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="icon-color text-uppercase">Locations</h6>
          <span className="icon-color">
            <i className="fa fa-caret-up"></i>
          </span>
        </div>
        <ul className="list-unstyled font-small grey-color">
          <li>Greater Toronto Area</li>
          <li>Region of Peel</li>
          <li>Region of Hamilton</li>
          <li>Region of Waterloo</li>
          <li className="icon-color fw-bold text-underline">
            View All Locations
          </li>
          <li>
            <button className="btn btn-primary">
              <img src={marker} alt="Map Icon" /> Map Search
            </button>
          </li>
        </ul>
      </div>
      {/* Auth Buttons */}
      <div className="d-flex auth-btn mt-5">
        {isLoggedIn === 0 ? (
          <Link to="/login" className="login black">
            <span>LogIn</span>
          </Link>
        ) : (
          <Link to="#" onClick={handleLogout} className="login black">
            <span>Logout</span>
          </Link>
        )}
        <button type="button" className="btn btn-primary get-started">
          Register
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
