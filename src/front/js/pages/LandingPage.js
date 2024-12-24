import React from "react";
import Header from "../component/Header";
import Features from "../component/Features";
import GetInTouch from "../component/GetInTouch";
import { Footer } from "../component/footer"; // Import using curly braces
import "../../styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      {/* Main banner section */}
      <section className="main-banner">
        <div className="banner-text">
          <h1>From Seed to Sale, DispenseMaster Manages It All.</h1>
          <p>
            DispenseMaster by <strong>SpectraSphere</strong> streamlines cannabis operations with advanced tools for compliance, inventory management, and networking—empowering your business to thrive in a competitive market.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="phone-image">
          <img
            src="https://via.placeholder.com/250x500"
            alt="App Preview Placeholder"
          />
        </div>
      </section>
      {/* Features section */}
      <Features />
      <GetInTouch />
      {/* Footer Section */}
      <Footer>
        <p className="footer-text">
          DispenseMaster is brought to you by <strong>SpectraSphere</strong>—Innovating the future of cannabis technology.
        </p>
      </Footer>
    </div>
  );
};

export default LandingPage;
