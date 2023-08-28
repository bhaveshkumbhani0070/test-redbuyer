import React from "react";
import banner from "../assets/banner.svg";
import icon from "../assets/icon.svg";

const Banner = () => {
  return (
    <div className="home-page">
      <div className="container-fluid">
        <div className="row mobile--banner">
          <div className="col-lg-7 col-md-6 col-12 instant-container mt-5">
            <div className="hero_heading_box">
              <h1>Get an Instant offer and sell your home</h1>
              <form id="home_value_search_form">
                <input type="hidden" name="" id="search_place_destination" />
                <div className="search">
                  <img className="icon" src={icon} alt="" />
                  <input
                    type="text"
                    className="form-control pac-target-input"
                    id="home_value_search"
                    placeholder="Where’s your house?"
                    autoComplete="off"
                  />
                  <button
                    className="btn btn-primary mr-2"
                    type="button"
                    onClick="if (!window.__cfRLUnblockHandlers) return false; checkSubmission('')"
                  >
                    Get my free offer
                  </button>
                </div>
              </form>
              <p>Receive an offer within 24 hours, it's that simple!</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12 mt-2">
            <img className="img" src={banner} alt="Home Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
