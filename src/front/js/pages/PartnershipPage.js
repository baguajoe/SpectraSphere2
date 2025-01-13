import React from "react";
import PartnershipForm from "../component/PartnershipForm"; // Import the form component
import "../../styles/partnershipPage.css";

const PartnershipPage = () => {
  return (
    <div className="partnership-page">
      <section className="partnership-intro">
        <h1>Partner with Us</h1>
        <p>
          Join forces with <strong>Eye Forge Studios</strong> to revolutionize the cannabis industry.
          Whether you’re a dispensary owner, grow farm operator, or seedbank owner, our platforms are tailored to help you thrive in this competitive market.
        </p>
        <h2>Why Partner with Us?</h2>
        <ul className="px-5">
          <li>Access to real-time price comparison and deals.</li>
          <li>Enhanced customer reach through AI-powered Weed Strain Recognizer.</li>
          <li>Opportunities to educate and recruit through LeafBridgeConnect.</li>
          <li>Dedicated job posting board to attract top talent in the industry.</li>
        </ul>
      </section>

      {/* Partnership Form Section */}
      <section className="partnership-form-section">
        <PartnershipForm /> {/* Embed the form component here */}
      </section>
    </div>
  );
};

export default PartnershipPage;
