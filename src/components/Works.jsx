import React from "react";
import staticHome from "../assets/images@2x.png";
import charmPointer from "../assets/charm-pointer.png";
import pointerLines from "../assets/pointer-lines.png";

const Works = () => {
  return (
    <div className="how-works">
      {/* Section Title */}
      <div className="text-center">
        <h2>
          <b>Let's See How it Works</b>
        </h2>
        <p>Here's how we make it easier to sell your home</p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {/* Static Home Image */}
            <img className="img" src={staticHome} alt="Static Home" />
          </div>
          <div className="col-md-6">
            <div className="steps">
              {/* Pointer Lines */}
              <div className="pointer-lines">
                <img src={pointerLines} alt="Pointer Lines" />
              </div>
              <div className="step-div">
                {/* Step 1 */}
                <div className="step1">
                  <div className="charm-tick">
                    <img src={charmPointer} alt="Charm Pointer" />
                  </div>
                  <h6>STEP 1</h6>
                  <h5 className="text-uppercase">REQUEST FOR AN OFFER</h5>
                  <p>
                    Fill in your property details and get an <br /> instant
                    preliminary home value.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="step2">
                  <div className="charm-tick1">
                    <img src={charmPointer} alt="Charm Pointer" />
                  </div>
                  <h6>STEP 2</h6>
                  <h5 className="mb-0_4">SCHEDULE AN APPOINTMENT</h5>
                  <p>
                    Show us your home in-person or virtually <br /> and get our
                    offer within 24 hours of <br /> the appointment.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="step3">
                  <div className="charm-tick2">
                    <img src={charmPointer} alt="Charm Pointer" />
                  </div>
                  <h6>STEP 3</h6>
                  <h5 className="mb-0_4">SELL YOUR HOUSE</h5>
                  <p>
                    Have complete control over your decision. <br />
                    Either accept our offer or list with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
