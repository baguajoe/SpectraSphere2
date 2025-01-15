import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/EyeForgeStudios.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Eye Forge Studios Logo" className="logo" />
        </NavLink>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/partnership"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setIsOpen(false)}
              >
                Partnership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/features"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setIsOpen(false)}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/personalization-data"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setIsOpen(false)}
              >
                Personalization Data Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};