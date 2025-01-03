import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  // Button handler to redirect to a specific page
  const handleButtonClick = () => {
    navigate("/early-access"); // Redirects to the Early Access page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          SpectraSphere
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/partnership" className="nav-link">
                Partnership
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/early-access" className="nav-link">
                Early Access
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Button to redirect */}
          <button
            className="btn btn-primary ms-3"
            onClick={handleButtonClick}
          >
            Sign Up for Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};
