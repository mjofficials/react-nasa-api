import React from "react";
import { Link } from "react-router-dom";

import navStyles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={navStyles.navbar} >
      <Link to='/' >
        <button className={navStyles.navbar_btn} >Back to home</button>
      </Link>
    </div>
  );
};

export default Navbar;
