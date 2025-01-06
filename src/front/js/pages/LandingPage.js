import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import Header from "../component/Header";
import Features from "../component/Features";
import GetInTouch from "../component/GetInTouch";
// import { Footer } from "../component/footer";
import "../../styles/landingPage.css";
import "../../styles/aboutSpectraSphere.css";
import leaf from "../../img/leaf.jpg";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleSignUpClick = () => {
    navigate("/sign-up"); // Navigate to the Sign-Up page
  };

  const handlePartnershipClick = () => {
    navigate("/partnership"); // Navigate to the Partnership page
  };

  return (
    <div className="landing-page">
      <Header />

      {/* Main banner section */}
      <section className="main-banner">
        <div className="banner-text">
          <h1>From Seed to Sale, DispenseMaster Manages It All.</h1>
          <p>
            DispenseMaster by <strong>SpectraSphere</strong> streamlines cannabis operations with advanced tools for compliance, inventory management, CRM, and networking—empowering your business to thrive in a competitive market.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleSignUpClick}>
              Contact Us for Updates
            </button>
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

      {/* How Your Input Helps section */}
      <section className="community-involvement">
        <h2>How Your Input Helps</h2>
        <div className="card-container">
          <div className="card">
            <h3>Your Impact on AI</h3>
            <p>
              By sharing your preferences and feedback, you're helping us build smarter AI models that:
            </p>
            <ul>
              <li>Recommend strains tailored to your needs.</li>
              <li>Optimize inventory to ensure your favorite products are always in stock.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Shaping the Future</h3>
            <ul>
              <li>Forecast trends to develop new and exciting products.</li>
              <li>Improve cannabis tools for everyone in the industry.</li>
            </ul>
            <p>
              Together, we can shape the future of cannabis technology. Fill out the form and be part of the journey!
            </p>
            <button className="primary-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </section>


      {/* Partnership Section */}
      <section className="partner-with-us">
        <h2>Partner with Us</h2>
        <div className="card-container">
          <div className="card">
            <h3>Opportunities</h3>
            <p>
              Are you a dispensary owner, grow farm operator, or seedbank owner? Join forces with <strong>SpectraSphere</strong> and revolutionize the cannabis industry.
            </p>
          </div>
          <div className="card">
            <h3>Benefits</h3>
            <p>
              Gain access to real-time price comparison, AI tools, networking opportunities, and a dedicated job posting board to attract top talent.
            </p>
            <button className="primary-btn" onClick={handlePartnershipClick}>
              Become a Partner
            </button>
          </div>
        </div>
      </section>


      {/* LeafBridgeConnect section */}
      <section className="leafbridgeconnect-section">
        <h2>Introducing LeafBridgeConnect</h2>
        <p>
          Enhance your cannabis business with <strong>LeafBridgeConnect</strong>, an add-on product designed to help you network, innovate, and grow. Whether you're looking for strain recognition through image AI, connecting with professionals, or accessing exclusive cannabis industry resources, LeafBridgeConnect has you covered.
        </p>
        <p>
          <strong>LeafBridgeConnect</strong> will be available as a <strong>free platform</strong>, offering essential tools and features to support your cannabis business. For those looking to take their expertise to the next level, the <strong>Pro version</strong> will provide access to exclusive <strong>courses, workshops, and industry-specific educational resources</strong>.
        </p>
        <p>
          With LeafBridgeConnect, you'll not only stay connected but also gain the knowledge and tools to thrive in a competitive market.
        </p>

        <div class="d-flex">
          {/* <div className="placeholder-image">
              <img src={leaf} alt="LeafBridgeConnect Preview" />
            </div> */}
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
        </div>
        <div className="cta-buttons">
          <button className="primary-btn" onClick={handleSignUpClick}>
            Sign Up for Updates
          </button>
        </div>

      </section>




      {/* GetInTouch section */}
      <GetInTouch />

      {/* Footer Section */}
      {/* <Footer>
        <p className="footer-text">
          DispenseMaster and LeafBridgeConnect are powered by <strong>your input</strong>. Together, we’re building smarter AI for the future of cannabis.
        </p>
      </Footer> */}
    </div>
  );
};

export default LandingPage;
