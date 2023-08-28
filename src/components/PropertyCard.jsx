import React from "react";
import Carousel from "./Carousel";

const PropertyCard = ({ item }) => {
  const {
    address,
    bathrooms,
    bedrooms,
    city,
    county,
    garage,
    list_price: price,
    photos,
  } = item;

  function currencyFormat(num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div className="col-md-4 col-xs-12 col-sm-6 mt-2 mb-2">
      <div className="property-info pb-2">
        <div className="property-img">
          <span className="icon-color bg-img left-position font-xsmall width-35">
            New
          </span>
          <span className="icon-color bg-img right-position">
            <i className="fa-regular fa-heart"></i>
          </span>
          <Carousel images={photos} />
        </div>
        <div className="property-detail pl-2">
          <div className="price-addr pl-2">
            <span className="price mb-0">{currencyFormat(price)}</span>
            <span className="property-addr">{`${address}, ${city}, ${county}`}</span>
          </div>
          <div className="quick-search">
            <span className="icon-color">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="property-basic-detail">
          <div className="property-bottom-info">
            <span>
              <span className="icon-color">
                <i className="fa-solid fa-bed"></i>
              </span>{" "}
              {bedrooms} Beds
            </span>
            <span>
              <span className="icon-color">
                <i className="fa-solid fa-bath"></i>
              </span>{" "}
              {bathrooms} Baths
            </span>
            <span>
              <span className="icon-color">
                <i className="fa-solid fa-warehouse"></i>
              </span>{" "}
              {garage || 0} Garages
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
