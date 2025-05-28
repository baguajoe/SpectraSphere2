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
                value="Updates on DoppelFlex"
                checked={formData.interests.includes("Updates on DoppelFlex")}
                onChange={handleChange}
              />
              Updates on DoppelFlex
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="Updates on StreampireX"
                checked={formData.interests.includes("Updates on StreampireX")}
                onChange={handleChange}
              />
              Updates on StreampireX
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="CypherSifu"
                checked={formData.interests.includes("CypherSifu")}
                onChange={handleChange}
              />
              CypherSifu
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="DispenseMaster"
                checked={formData.interests.includes("DispenseMaster")}
                onChange={handleChange}
              />
              DispenseMaster
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="LeafBridgeConnect"
                checked={formData.interests.includes("LeafBridgeConnect")}
                onChange={handleChange}
              />
              LeafBridgeConnect
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
