import React from "react";
import SignUpForm from "../component/SignUpForm";
import Header from "../component/Header"; // Optional Header for consistent branding
import { Footer } from "../component/footer"; // Use named import for Footer
import "../../styles/signupPage.css"; // Add specific styling for the page

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <Header />

      {/* Intro Section */}
      <section className="signup-intro">
        <h1>Help Us Build Smarter Cannabis Tools</h1>
        <p>
          Your input helps us create AI-driven solutions tailored to your preferences. By sharing your feedback, you're contributing to models that:
        </p>
        <ul>
          <li>Recommend strains personalized to your needs.</li>
          <li>Optimize inventory to ensure popular products are always available.</li>
          <li>Predict trends to develop new and innovative products.</li>
          <li>Enhance tools to benefit the entire cannabis community.</li>
        </ul>
        <p>Be part of the journey and shape the future of cannabis technology!</p>
      </section>

      {/* Sign-Up Form Section */}
      <section className="signup-form-container">
        <h2>Sign Up for Updates</h2>
        <p>
          Fill out the form below to get early access to DispenseMaster, personalized recommendations, and updates on exciting features.
        </p>
        <SignUpForm />
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
