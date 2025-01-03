import React from "react";
import PartnershipPage from "../component/PartnershipComponent";
import { Footer } from "../component/footer"; // Import footer component
// import "../../styles/partnershippage.css";

const PartnershipPageComponent = () => {
  return (
    <div className="partnership-page-container">
      <PartnershipPage />
      <Footer>
        <p className="footer-text">
          SpectraSphere is innovating the future of cannabis technology. Join us in shaping the industry.
        </p>
      </Footer>
    </div>
  );
};

export default PartnershipPageComponent;
