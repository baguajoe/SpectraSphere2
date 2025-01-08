import React, {useState} from "react";
// import ContactPage from "../component/ContactPage";
import "../../styles/contactUs.css"

const ContactUs = () => {
  const [formData, setFormData]=useState({
   name: "",
   email: "",
   comment: "" 
  });
  const [status, setStatus]=useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  const handleChange=(e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, isSubmitting: true });

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
        isError: false,
        isSubmitting: false
      });

    } catch (error) {
      setStatus({
        message: error.message || "Something went wrong. Please try again.",
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <div className="contact-page h-100">
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Get Involved with SpectraSphere</h2>
          <p>Have questions or want to collaborate? Reach out to us!</p>

          {status.message && (
            <div className={`alert ${status.isError ? "alert-error" : "alert-success"}`}>
              {status.message}
            </div>
          )}

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="comment">Message:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="primary-btn" disabled={status.isSubmitting}>
            {status.isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
    // <div className="contact-page text-center py-4">
    //   {/* <ContactPage /> */}
    //   <section className="contact-page">
    //     <h1>Get Involved with SpectraSphere</h1>
    //     <p>Have questions or want to collaborate? Reach out to us!</p>
    //     {status.message && (
    //       <div className={`alert ${status.isError ? "alert-error" : "alert-success"}`}>
    //         {status.message}
    //       </div>
    //     )}
    //     <form className="contact-form" onSubmit={handleSubmit}>
    //       <input 
    //       type="text" 
    //       placeholder="Your Name" 
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       required 
    //       />
    //       <input 
    //       type="email" 
    //       placeholder="Your Email" 
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       required 
    //       />
    //       <textarea 
    //       placeholder="Your Message" 
    //       name="comment"
    //       value={formData.comment}
    //       onChange={handleChange}
    //       required
    //       ></textarea>
    //       <button type="submit" className="primary-btn">Submit</button>
    //     </form>
    //   </section>
    // </div>
  );
};

export default ContactUs;
