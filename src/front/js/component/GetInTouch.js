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
      alert("Thank you for contacting us.")
    }

    setStatus({
      message: result.message,
      isError: !result.success,
      isSubmitting: false
    });
  };

 
  return (
    <section className="get-in-touch">
      <div className="container py-4">
        <div className="get-in-touch-card mx-auto">
          <h2 className="text-center mb-4">Get In Touch</h2>
          <p className="text-center mb-4">
            Stay connected with <strong>DispenseMaster</strong> and{" "}
            <strong>LeafBridgeConnect</strong>! Subscribe to receive updates on the
            latest features, industry insights, and exclusive deals.
          </p>
          
          {status.message && (
            <div className={`alert ${status.isError ? 'alert-danger' : 'alert-success'} mb-4`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="needs-validation">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control form-control-lg"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label"><b>Areas of Interest:</b></label>
              <div className="interest-checkboxes">
                {[
                  "Updates on DoppelFlex",
                  "Updates on StreampireX",
                  "CypherSifu",
                  "DispenseMaster",
                  "LeafBridgeConnect"
                ].map((interest) => (
                  <div className="form-check mb-2" key={interest}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleChange}
                      id={interest.replace(/\s+/g, '-').toLowerCase()}
                    />
                    <label 
                      className="form-check-label" 
                      htmlFor={interest.replace(/\s+/g, '-').toLowerCase()}
                    >
                      {interest}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={status.isSubmitting}
            >
              {status.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
