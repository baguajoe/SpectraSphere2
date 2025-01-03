import React, {useState} from "react";
// import ContactPage from "../component/ContactPage";
import "../../styles/contactUs.css"
import { Footer } from "../component/footer";

const ContactUs = () => {
  const [formData, setFormData]=useState({
   name: "",
   email: "",
   comment: "" 
  });
  const [status, setStatus]=useState({
    message: "",
    isError: false
  });

  const handleChange=(e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false });

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          comment: `Name: ${formData.name}\n\nMessage: ${formData.comment}`
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      // Clear form on success
      setFormData({ name: "", email: "", comment: "" });
      setStatus({
        message: "Thank you for your message! We'll get back to you soon.",
        isError: false
      });

    } catch (error) {
      setStatus({
        message: error.message || "Something went wrong. Please try again.",
        isError: true
      });
    }
  };

  return (
    <div className="contact-page">
      {/* <ContactPage /> */}
      <section className="contact-page">
        <h1>Get Involved with SpectraSphere</h1>
        <p>Have questions or want to collaborate? Reach out to us!</p>
        {status.message && (
          <div className={`alert ${status.isError ? "alert-error" : "alert-success"}`}>
            {status.message}
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Your Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
          />
          <input 
          type="email" 
          placeholder="Your Email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
          />
          <textarea 
          placeholder="Your Message" 
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          ></textarea>
          <button type="submit" className="primary-btn">Submit</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
