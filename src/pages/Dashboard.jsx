import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import Card from "../components/Card";
import { get_api } from "../service";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPropertiesListing();
  }, []);

  async function getPropertiesListing() {
    try {
      // Fetch property listing data from the API
      get_api("058dbada-3f7f-46c6-83d2-a3c5575b2c6a", function (res) {
        setData(res.data.data);
      });
    } catch (error) {
      console.error("Error fetching property listing data:", error);
    }
  }

  return (
    <div className="container--login">
      {data === null ? (
        // Display shimmer loading animation while data is loading
        <Shimmer />
      ) : data.length > 0 ? (
        // Display property listing if data is available
        <div className="container mt-5">
          <h2 className="text-center">Browse Homes</h2>
          <p className="text-center">View your Dream Home</p>
          <div className="row">
            {data.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        // Display message when no data is found
        <div className="container">
          <div className="row">
            <h2 className="text-center">No Data Found</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
