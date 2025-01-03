import React from "react";
// import "../../styles/contactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <h1>Get Involved with SpectraSphere</h1>
      <p>Have questions or want to collaborate? Reach out to us!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="primary-btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactPage;
