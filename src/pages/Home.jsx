import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../redux/userDetailsSlice";
import Banner from "../components/Banner";
import Works from "../components/Works";
import Reviews from "../components/Reviews";
import SearchBox from "../components/SearchBox";

const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("isLoggedIn", false);
    dispatch(setLogin(false));
    navigate("/");
  }, []);
  return (
    <>
      <Banner />
      <Works />
      <Reviews />
      <SearchBox />
    </>
  );
};

export default Home;
