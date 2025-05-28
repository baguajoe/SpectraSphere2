import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Products from "../component/Products";
import GetInTouch from "../component/GetInTouch";
import "../../styles/landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();


  const handleLearnMoreClick = () => {
    navigate("/about-us"); // Navigate to the Sign-Up page
  };

  const handleSignUpClick = () => {
    navigate("/personalization-data"); // Navigate to the Sign-Up page
  };

  const handlePartnershipClick = () => {
    navigate("/partnership"); // Navigate to the Partnership page
  };

  return (
    <div className="landing-page">
      <Header />

      {/* About Eye Forge Studios */}
      <section className="main-banner">
        <div className="banner-text">

          <h2>About Eye Forge Studios</h2>
          <p className="lead">
            At Eye Forge Studios, we specialize in creating advanced AI, VR, Streaming, and CRM solutions for the next generation of users.
            Our mission is to empower creators, businesses, and industries through innovative software and seamless user experiences.
          </p>
          <Link to="/about-us" className="btn btn-outline-primary mt-3">
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* Products section */}
      <Products />
      {/* Product Ecosystem */}
     
      {/* Contact Form */}
      <GetInTouch />
    </div>
  );
};

const AppSection = ({ title, subtitle, description, features }) => {
  const navigate = useNavigate();
  return (
    <div className="card mb-5 shadow-sm">
      <div className="card-body">
        <h3 className="text-primary">{title}</h3>
        <h5 className="text-success">{subtitle}</h5>
        <p className="mt-3">{description}</p>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <button className="btn btn-outline-success mt-3" onClick={() => navigate("/contact-us")}>
          Learn More
        </button>
      </div>
    </div>
  ); 
};

export default LandingPage;
