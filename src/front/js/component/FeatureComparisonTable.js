import React from "react";
import "../../styles/featureComparisonTable.css"; // Add your styles here

const FeatureComparisonTable = () => {
  const features = [
    { feature: "Point of Sale (POS)", basic: true, pro: true, enterprise: true },
    { feature: "Integrated Traceability (METRC)", basic: true, pro: true, enterprise: true },
    { feature: "Compliance Management Tools", basic: true, pro: true, enterprise: true },
    { feature: "Inventory Management", basic: true, pro: true, enterprise: true },
    { feature: "Reporting & Analytics", basic: true, pro: "Advanced", enterprise: "Custom BI Tools" },
    { feature: "Discount Engine", basic: true, pro: true, enterprise: true },
    { feature: "Self-Service Help Center", basic: true, pro: true, enterprise: true },
    { feature: "Email Marketing", basic: "Basic", pro: "Advanced", enterprise: "Advanced + Automation" },
    { feature: "Loyalty Program", basic: "Basic", pro: "Advanced", enterprise: "Advanced + Customization" },
    { feature: "Self-Service Kiosk Mode", basic: false, pro: true, enterprise: true },
    { feature: "Multi-Location Management", basic: false, pro: true, enterprise: true },
    { feature: "Multi-State Operation", basic: false, pro: false, enterprise: true },
    { feature: "Advanced Compliance Alerts", basic: false, pro: true, enterprise: true },
    { feature: "AI-Powered Product Recommendations", basic: false, pro: true, enterprise: true },
    { feature: "Personalization Tools", basic: false, pro: true, enterprise: true },
    { feature: "Customer CRM", basic: false, pro: true, enterprise: true },
    { feature: "Integrated Ecommerce", basic: false, pro: true, enterprise: true },
    { feature: "Chat Support", basic: false, pro: true, enterprise: true },
    { feature: "Phone Support", basic: false, pro: false, enterprise: true },
    { feature: "Dedicated Account Manager", basic: false, pro: false, enterprise: true },
    { feature: "Custom API Support", basic: false, pro: true, enterprise: true },
    { feature: "Provisioning via SSO/SAML/SCIM", basic: false, pro: false, enterprise: true },
    { feature: "Smart Menu Personalization", basic: false, pro: true, enterprise: true },
    { feature: "Customizable Business Intelligence", basic: false, pro: false, enterprise: true },
    { feature: "SEO-Friendly Embeds", basic: false, pro: true, enterprise: true },
    { feature: "Payments Integration (Online/In-Store)", basic: false, pro: true, enterprise: true },
    { feature: "Support for Custom Integrations", basic: false, pro: false, enterprise: true },
  ];

  return (
    <div className="feature-comparison-table">
      <h1>Feature Comparison</h1>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic Tier</th>
            <th>Pro Tier</th>
            <th>Enterprise Tier</th>
          </tr>
        </thead>
        <tbody>
          {features.map((item, index) => (
            <tr key={index}>
              <td>{item.feature}</td>
              <td>{item.basic === true ? "✔️" : item.basic === false ? "❌" : item.basic}</td>
              <td>{item.pro === true ? "✔️" : item.pro === false ? "❌" : item.pro}</td>
              <td>{item.enterprise === true ? "✔️" : item.enterprise === false ? "❌" : item.enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparisonTable;
