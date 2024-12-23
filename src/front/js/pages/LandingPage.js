import React from "react";
import Header from "../component/Header";
import Features from "../component/Features";
import GetInTouch from "../component/GetInTouch";
// import Footer from "../component/footer";
// import "../style/landingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="main-banner">
        <div className="banner-text">
          <h1>DispenseMaster: Dispense Smarter, Grow Faster</h1>
          <p>
            DispenseMaster is your all-in-one platform for managing dispensary
            operations. From inventory tracking and CRM to compliance
            automation, our app simplifies every aspect of your business.
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
      <Features />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default LandingPage;
