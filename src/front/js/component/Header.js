import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Connecting Dispensaries, Grow Farms, and Seedbanks—Seamlessly.</h1>
        <p className="subheading">
          Unite your cannabis operations under one intuitive platform.
        </p>
        <div className="cta-buttons">
          <Link to="/sign-up">
            <button className="btn-primary">Sign Up For Updates</button>
          </Link>
          {/* <button className="btn-secondary">Learn More</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
