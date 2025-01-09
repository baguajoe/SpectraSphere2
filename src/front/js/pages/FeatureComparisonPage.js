import React from "react";
import FeatureComparisonTable from "../component/FeatureComparisonTable"; // Component import
import "../../styles/featureComparisonPage.css"; // Add styles specific to the page

const FeatureComparisonPage = () => {
  return (
    <div className="feature-comparison-page">
      <header>
        <h1>Compare Our Plans</h1>
        <p>Discover the right plan for your business needs. Reach out for pricing details!</p>
      </header>
      <FeatureComparisonTable />
    </div>
  );
};

export default FeatureComparisonPage;
