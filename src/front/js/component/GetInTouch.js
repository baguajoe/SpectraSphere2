import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const GetInTouch = () => {
  const { actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        isError: true
      });
      return;
    }

    const result = await actions.submitContactForm(formData);

    if (result.success) {
      setFormData({ name: "", email: "", message: "", interests: [] });
    }

    setStatus({
      message: result.message,
      isError: !result.success,
      isSubmitting: false
    });
  };

  return (
    <section className="get-in-touch">
      <div className="get-in-touch-card">
        <h2>Get In Touch</h2>
        <p>
          Stay connected with <strong>DispenseMaster</strong> and{" "}
          <strong>LeafBridgeConnect</strong>! Subscribe to receive updates on the
          latest features, industry insights, and exclusive deals tailored for the
          cannabis industry.
        </p>
        {status.message && (
          <div className={`alert ${status.isError ? "alert-error" : "alert-success"}`}>
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
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
          {/* <button type="submit">Submit</button> */}
          <button type="submit" className="primary-btn" disabled={status.isSubmitting}>
            {status.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
