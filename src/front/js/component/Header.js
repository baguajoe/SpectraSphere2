import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header text-center py-5">
      <div className="header-content">
        <h1 className="display-4 fw-bold">Welcome to Eye Forge Studios</h1>
        <p className="lead mt-3">
          Pioneering AI, 3D, Streaming, and Business Management Solutions.
        </p>
        <p className="mt-2 text-muted">
          Launching Full Services September 1st, 2025
        </p>
        <div className="cta-buttons mt-4">
          <Link to="/contact-us">
            <button className="btn btn-primary btn-lg">Contact Us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
