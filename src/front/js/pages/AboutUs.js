import React from "react";
import Header from "../component/Header";
import "../../styles/AboutSection.css"; // Import corresponding CSS file

const AboutUs = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Main About Banner */}
      <section className="about-banner">
        <div className="banner-content">
          <h1>About Eye Forge Studios</h1>
          <p>
            We thrive at the intersection of creativity, technology, and storytelling. 
            As a multi-disciplinary studio, we're dedicated to delivering innovative 
            solutions that captivate, engage, and inspire.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <h2>What We Do</h2>
        <div className="card-container">
          <div className="card">
            <h3>Apps & Software Development</h3>
            <p>
              From intuitive mobile apps to robust software solutions, we build tools 
              that empower businesses and delight users. Our designs are user-focused, 
              scalable, and cutting-edge.
            </p>
          </div>
          <div className="card">
            <h3>Website Design & Development</h3>
            <p>
              We craft beautiful, functional, and responsive websites that tell your 
              brand's story and connect you with your audience.
            </p>
          </div>
          <div className="card">
            <h3>3D Content & Movies</h3>
            <p>
              We bring ideas to life with high-quality 3D animations and films, 
              delivering visual experiences that captivate audiences and leave 
              lasting impressions.
            </p>
          </div>
          <div className="card">
            <h3>Comic Books & Storytelling</h3>
            <p>
              Through our original comic book series, we bring bold characters and 
              unforgettable adventures to life, blending art and narrative into 
              something extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to push the boundaries of creativity and technology 
          while staying true to the heart of storytelling. We believe in the power 
          of innovation and artistry to transform ideas into impactful, tangible results.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2 className="mt-5">Why Choose Us?</h2>
        <div className="card-container">
          <div className="card">
            <h3>Expertise</h3>
            <p>
              A diverse team of creatives and tech experts with a passion for excellence.
            </p>
          </div>
          <div className="card">
            <h3>Multi-Disciplinary</h3>
            <p>
              A unique approach that bridges the gap between technology and artistry.
            </p>
          </div>
          <div className="card">
            <h3>Collaboration</h3>
            <p>
              A commitment to partnership, ensuring your vision is brought to life in 
              every project.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <h2>Let's Create Together</h2>
        <p>
          Whether you're looking to build an app, design a website, produce stunning 
          3D content and films, or tell your story through comics, Eye Forge Studios 
          has the tools and talent to make it happen.
        </p>
        <p className="cta-text">
          Let us help you forge your vision into reality.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
