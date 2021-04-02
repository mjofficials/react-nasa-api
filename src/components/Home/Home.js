import React from "react";
import { Link } from "react-router-dom";

import homeStyles from "./Home.module.css";

const Home = () => {
  return (
    <div className={homeStyles.homeDiv}>
      <h1 className={homeStyles.home_title}>Welcome to NASA!!</h1>
      <Link to="/resultPage">
        <button className={homeStyles.home_btn}>See stars</button>
      </Link>
    </div>
  );
};

export default Home;
