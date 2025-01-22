import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
// import ContactPage from "../component/ContactPage";
import "../../styles/contactUs.css"

const ContactUs = () => {
  const { actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    interests: []
  });
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, isSubmitting: true });

    if (!formData.name || !formData.email) {
      setStatus({
        message: "Please fill in all required fields",
        isError: true,
        isSubmitting: false
      });
      return;
    }

    const result = await actions.submitContactForm(formData);

    if (result.success) {
      setFormData({ name: "", email: "", comment: "", interests: [] });
      alert("Thank you for contacting us.")
    }
  

    setStatus({
      message: result.message,
      isError: !result.success,
      isSubmitting: false
    });
  };

  return (
    <div className="contact-page h-100">
      <section className="contact-form-section pb-4">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Get Involved with Eye Forge Studios</h2>
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
          >
          </textarea>

          <label><b>Areas of Interest:</b></label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="interests"
                value="Updates on DispenseMaster"
                checked={formData.interests.includes("Updates on DispenseMaster")}
                onChange={handleChange}
              />
              Updates on DispenseMaster
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="Updates on LeafBridgeConnect"
                checked={formData.interests.includes("Updates on LeafBridgeConnect")}
                onChange={handleChange}
              />
              Updates on LeafBridgeConnect
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="Partnership Opportunities"
                checked={formData.interests.includes("Partnership Opportunities")}
                onChange={handleChange}
              />
              Partnership Opportunities
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="Educational Content"
                checked={formData.interests.includes("Educational Content")}
                onChange={handleChange}
              />
              Educational Content
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="Job Opportunities"
                checked={formData.interests.includes("Job Opportunities")}
                onChange={handleChange}
              />
              Job Opportunities
            </label>
          </div>

          <button type="submit" className="primary-btn" disabled={status.isSubmitting}>
            {status.isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>
    </div>

  );
};

export default ContactUs;
