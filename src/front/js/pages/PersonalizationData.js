import React from "react";
import PersonalizationDataForm from "../component/PersonalizationDataForm"; // Import the form component
import "../../styles/personalizationData.css"; // Ensure your styles are linked

const PersonalizationData = () => {
  return (
    <div className="personalization-data-page">
      <section className="personalization-intro">
        <h1 className="text-white">Personalization Data Form</h1>
        <p className="text-white">
          Help us tailor your experience by providing details about your preferences and needs. Your responses are anonymous and will only be used to enhance our recommendations.
        </p>
        <h2 className="text-white">How Your Input Helps</h2>
        <div className="card-container">
          <div className="card">
            <h3>Your Impact on AI</h3>
            <p>
              By sharing your preferences, you help us build smarter AI models that provide:
            </p>
            <ul>
              <li>Better product recommendations.</li>
              <li>Insights tailored to your unique needs.</li>
              <li>An optimized shopping experience.</li>
            </ul>
          </div>
          <div className="card">
            <h3>What You'll Gain</h3>
            <p>
              Receive personalized recommendations and explore products designed for your lifestyle and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Personalization Data Form Section */}
      <section className="personalization-form-section">
        <PersonalizationDataForm /> {/* Embed the form component here */}
      </section>
    </div>
  );
};

export default PersonalizationData;
