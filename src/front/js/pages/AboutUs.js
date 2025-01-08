import React from "react";
import Header from "../component/Header";
import AboutSection from "../component/AboutSection"; // Import the reusable component
import "../../styles/AboutSection.css"; // Import corresponding CSS file

const AboutUs = () => {
  return (
    <div className="about-page text-center pb-4">
      <Header />
      <section className="about-banner" style={{ padding: "12px" }}>
        <h1 className="text-center">Welcome to SpectraSphere</h1>
        <p className="text-center mb-1">
          Redefining the cannabis industry through innovation, technology, and collaboration.
        </p>
      </section>
      <AboutSection />
      <section className="team-section">
        <h2 className="text-center">Our Team</h2>
        <p className="text-center px-5">
          SpectraSphere is powered by a diverse team of innovators, technologists, and cannabis industry experts.
          Together, we’re committed to creating tools that empower businesses and enhance customer experiences.
        </p>
      </section>
      <section className="vision-mission-section">
        <h2 className="text-center">Our Vision</h2>
        <p className="text-center px-5">
          To be the leading technology partner for the cannabis industry, offering seamless solutions that drive growth and innovation.
        </p>
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center px-5">
          To empower dispensaries, grow farms, and seedbanks with tools that simplify operations, optimize inventory, and enhance compliance—helping businesses thrive in a dynamic market.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
