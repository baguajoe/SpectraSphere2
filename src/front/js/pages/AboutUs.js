import React from "react";
import Header from "../component/Header";
import "../../styles/AboutSection.css"; // Import corresponding CSS file

const AboutUs = () => {
  return (
    <div className="about-page text-center pb-4">
      <Header />
      <section className="about-banner" style={{ padding: "12px" }}>
        <h1 className="text-center">About Us</h1>
        <p className="text-center px-5">
          At <b>Eye Forge Studios</b>, we thrive at the intersection of creativity, technology, and storytelling. As a multi-disciplinary studio, we’re dedicated to delivering innovative solutions that captivate, engage, and inspire. Whether it’s developing cutting-edge apps, designing stunning websites, producing immersive 3D content, or crafting compelling comic books, Eye Forge Studios is your partner in turning ideas into reality.
        </p>
      </section>
      <section className="what-we-do-section">
        <h2 className="text-center">What We Do</h2>
        <ul className="text-left px-5">
          <p>
            <strong>Apps & Software Development:</strong> From intuitive mobile apps to robust software solutions, we build tools that empower businesses and delight users. Our designs are user-focused, scalable, and cutting-edge.
          </p>
          <p>
            <strong>Website Design & Development:</strong> We craft beautiful, functional, and responsive websites that tell your brand’s story and connect you with your audience.
          </p>
          <p>
            <strong>3D Content & Movies:</strong> We bring ideas to life with high-quality 3D animations and films, delivering visual experiences that captivate audiences and leave lasting impressions.
          </p>
          <p>
            <strong>Comic Books & Storytelling:</strong> At Eye Forge Studios, storytelling is at our core. Through our original comic book series, we bring bold characters and unforgettable adventures to life, blending art and narrative into something extraordinary.
          </p>
        </ul>
      </section>
      <section className="mission-vision-section">
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center px-5">
          Our mission is simple: to push the boundaries of creativity and technology while staying true to the heart of storytelling. We believe in the power of innovation and artistry to transform ideas into impactful, tangible results.
        </p>
      </section>
      <section className="why-choose-us-section">
        <h2 className="text-center">Why Choose Us?</h2>
        <ul className="text-left px-5">
          <p>A diverse team of creatives and tech experts with a passion for excellence.</p>
          <p>A multi-disciplinary approach that bridges the gap between tech and art.</p>
          <p>A commitment to collaboration, ensuring your vision is brought to life in every project.</p>
        </ul>
      </section>
      <p className="text-center px-5">
        Whether you're looking to build an app, design a website, produce stunning 3D content and films, or tell your story through comics, Eye Forge Studios has the tools and talent to make it happen. Let us help you forge your vision into reality.
      </p>
    </div>
  );
};

export default AboutUs;
