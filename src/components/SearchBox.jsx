import React from "react";
import icon from "../assets/icon.svg";

const SearchBox = () => {
  return (
    <>
      <div className="search-section">
        {/* Search Section Container */}
        <div className="container-fluid">
          <div className="search-div">
            {/* Search Inner Content */}
            <div className="search-inner">
              <div className="search-content">
                {/* Instructions */}
                <p className="text-center fw-bold mb-0">
                  Enter the home details and
                </p>
                <h2 className="text-center icon-color">Get an Instant Offer</h2>
                <p className="text-center mb-4">Within 24 hours!</p>
                {/* Search Input */}
                <div className="search-box input-group mb-3">
                  <div className="input-group-prepend">
                    {/* Icon */}
                    <span className="input-group-text">
                      <img className="icon" alt="Icon" src={icon} />
                    </span>
                  </div>
                  {/* Input Field */}
                  <input
                    type="text"
                    className="form-control no-border font-xsmall"
                    placeholder="Where's your house?"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div className="input-group-append">
                    {/* Search Button */}
                    <span className="input-group-text">
                      <button className="btn btn-rounded btn-primary p-2">
                        Get my free offer
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
