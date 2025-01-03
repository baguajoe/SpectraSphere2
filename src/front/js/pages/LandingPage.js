import React from "react";
import Header from "../component/Header";
import Features from "../component/Features";
import GetInTouch from "../component/GetInTouch";
import AboutSpectraSphere from "../component/AboutSpectraSphere"; // Import the new component
import { Footer } from "../component/footer"; // Import using curly braces
import "../../styles/landingPage.css";
import "../../styles/aboutSpectraSphere.css";


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
            <p className="coming-soon">Coming Spring 2025</p>
            <button className="primary-btn">Sign Up for Updates</button>
          </div>
        </div>
        <div className="phone-image">
          <img
            src="https://via.placeholder.com/250x500"
            alt="DispenseMaster App Preview"
          />
        </div>
      </section>

      {/* Features section */}

      <Features />

      {/* LeafBridgeConnect section */}

      <section className="leafbridgeconnect-section">
        <h2>Introducing LeafBridgeConnect</h2>
        <p>
          Enhance your cannabis business with <strong>LeafBridgeConnect</strong>, an add-on product designed to help you network, innovate, and grow. Whether you're looking for strain recognition through image AI, connecting with professionals, or accessing exclusive cannabis industry resources, LeafBridgeConnect has you covered.
        </p>
        <div className="leafbridgeconnect-features">
          <div className="feature">
            <h3>Strain Recognition</h3>
            <p>
              Use cutting-edge image AI technology to identify cannabis strains with ease. Snap a picture and get detailed strain information instantly.
            </p>
          </div>
          <div className="feature">
            <h3>Professional Networking</h3>
            <p>
              Connect with dispensaries, growers, and industry professionals through our exclusive cannabis community.
            </p>
          </div>
          <div className="feature">
            <h3>Job Listings and Openings</h3>
            <p>
              Post job openings or search for exciting career opportunities in the cannabis industry. Find the perfect talent or role to grow your business or career.
            </p>
          </div>
        </div>
        <div className="cta-buttons">
          <p className="coming-soon">Coming Spring 2025</p>
          <button className="primary-btn">Sign Up for Updates</button>
        </div>
        <div className="placeholder-image">
          <img
            src="/leaf.jpg"
            alt="LeafBridgeConnect Preview"
          />
        </div>
      </section>
      <section className="about-spectrasphere">
        <div className="about-spectrasphere-card">
          <h2>About SpectraSphere</h2>
          <p>
            At <strong>SpectraSphere</strong>, we bridge technology and creativity to deliver innovative solutions for the cannabis industry. Our mission is to empower businesses with tools that streamline operations, enhance compliance, and foster professional connections.
          </p>
          <p>
            With cutting-edge platforms like DispenseMaster and LeafBridgeConnect, we are redefining how the cannabis ecosystem grows and thrives.
          </p>
          <p>
            Backed by a commitment to excellence and innovation, SpectraSphere continues to shape the future of cannabis technology, one groundbreaking solution at a time.
          </p>
        </div>
      </section>
      {/* GetInTouch section */}
      <GetInTouch />
      {/* Footer Section */}
      <Footer>
        <p className="footer-text">
          DispenseMaster and LeafBridgeConnect are brought to you by <strong>SpectraSphere</strong>—Innovating the future of cannabis technology.
        </p>
      </Footer>
    </div>
  );
};



export default LandingPage;
