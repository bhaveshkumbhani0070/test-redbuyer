import React, { useState } from "react";
import defaultImage from "../assets/card-bg.png";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-images">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="center-block img-fluid"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <img src={left} alt="left" />
        </div>
        <div className="right" onClick={handleNext}>
          <img src={right} alt="right" />
        </div>
      </div>
      <div className="carousel-indicator">
        {images.slice(0, 5).map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
