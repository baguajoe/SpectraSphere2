import React, { useState } from "react";
import "../../styles/partnershipForm.css"; // Ensure your styles are linked

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    businessType: "",
    location: "",
    goals: [],
    currentTools: "",
    challenges: "",
    contactMethod: "email",
    comments: "",
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  const partnershipGoals = [
    "Access to AI tools",
    "Networking opportunities",
    "Job posting board",
    "Educational resources",
    "Collaborative marketing campaigns",
    "Access to market insights",
    "Regulatory compliance support",
    "Sustainability initiatives",
    "Mentorship programs",
    "Product co-development opportunities",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleGoalsChange = (e) => {
    const { value } = e.target;
    const updatedGoals = formData.goals.includes(value)
      ? formData.goals.filter((goal) => goal !== value)
      : [...formData.goals, value];
    setFormData({ ...formData, goals: updatedGoals });
    setTouched({ ...touched, goals: true });
  };

  const getValidationMessage = (fieldName) => {
    if (!touched[fieldName]) return "";

    switch (fieldName) {
      case "email":
        return !formData.email ? "Email is required" : "";
      case "businessName":
        return !formData.businessName ? "Business name is required" : "";
      case "businessType":
        return !formData.businessType ? "Please select a business type" : "";
      case "location":
        return !formData.location ? "Location is required" : "";
      case "goals":
        return formData.goals.length === 0 ? "Please select at least one goal" : "";
      default:
        return "";
    }
  };

  const isFieldInvalid = (fieldName) => {
    return touched[fieldName] && getValidationMessage(fieldName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allFields = {
      email: true,
      businessName: true,
      businessType: true,
      location: true,
      goals: true
    };
    setTouched(allFields);

    // Check if there are any validation errors
    const hasErrors = Object.keys(allFields).some(field => getValidationMessage(field));

    if (hasErrors) {
      setStatus({
        message: "Please fill in all required fields",
        isError: true,
        isSubmitting: false
      });
      return;
    }

    setStatus({ message: "", isError: false, isSubmitting: true });

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit partnership application");
      }

      // Clear form on success
      setFormData({
        email: "",
        businessName: "",
        businessType: "",
        location: "",
        goals: [],
        currentTools: "",
        challenges: "",
        contactMethod: "email",
        comments: "",
      });
      setTouched({});

      setStatus({
        message: data.message || "Thank you for your partnership application!",
        isError: false,
        isSubmitting: false
      });

    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        message: error.message || "Something went wrong. Please try again.",
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <form className="partnership-form" onSubmit={handleSubmit} noValidate>
      <h2>Partner with Us</h2>

      {status.message && (
        <div className={`alert ${status.isError ? 'alert-danger' : 'alert-success'} mb-4`}>
          {status.message}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          1. Email Address: *
        </label>
        <input
          type="email"
          className={`form-control ${isFieldInvalid('email') ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {isFieldInvalid('email') && (
          <div className="invalid-feedback">{getValidationMessage('email')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="businessName" className="form-label">
          2. Business Name: *
        </label>
        <input
          type="text"
          className={`form-control ${isFieldInvalid('businessName') ? 'is-invalid' : ''}`}
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {isFieldInvalid('businessName') && (
          <div className="invalid-feedback">{getValidationMessage('businessName')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="businessType" className="form-label">
          3. Business Type: *
        </label>
        <select
          className={`form-select ${isFieldInvalid('businessType') ? 'is-invalid' : ''}`}
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="Dispensary">Dispensary</option>
          <option value="Grower">Grower</option>
          <option value="Seedbank">Seedbank</option>
          <option value="Other">Other</option>
        </select>
        {isFieldInvalid('businessType') && (
          <div className="invalid-feedback">{getValidationMessage('businessType')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          4. Location (City, State): *
        </label>
        <input
          type="text"
          className={`form-control ${isFieldInvalid('location') ? 'is-invalid' : ''}`}
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {isFieldInvalid('location') && (
          <div className="invalid-feedback">{getValidationMessage('location')}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">
          5. Partnership Goals (Select all that apply): *
        </label>
        <div className={`card p-3 ${isFieldInvalid('goals') ? 'border-danger' : ''}`} style={{ background: 'transparent', minWidth: '100%' }}>
          <div className="row">
            <div className="col-md-6">
              {partnershipGoals.slice(0, Math.ceil(partnershipGoals.length / 2)).map((goal) => (
                <div className="form-check" key={goal}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`goal-${goal}`}
                    value={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={handleGoalsChange}
                  />
                  <label className="form-check-label" htmlFor={`goal-${goal}`}>
                    {goal}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              {partnershipGoals.slice(Math.ceil(partnershipGoals.length / 2)).map((goal) => (
                <div className="form-check" key={goal}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`goal-${goal}`}
                    value={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={handleGoalsChange}
                  />
                  <label className="form-check-label" htmlFor={`goal-${goal}`}>
                    {goal}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isFieldInvalid('goals') && (
          <div className="text-danger small mt-1">{getValidationMessage('goals')}</div>
        )}
      </div>
      {/* <label>5. Partnership Goals (Select all that apply):</label>
      <div className="checkbox-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
        {partnershipGoals.map((goal) => (
          <label key={goal}>
            <input
              type="checkbox"
              value={goal}
              checked={formData.goals.includes(goal)}
              onChange={handleGoalsChange}
            />
            {goal}
          </label>
        ))}
      </div> */}

      <div className="mb-3">
        <label htmlFor="currentTools" className="form-label">
          6. Current Tools or Platforms:
        </label>
        <textarea
          className="form-control"
          id="currentTools"
          name="currentTools"
          value={formData.currentTools}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="challenges" className="form-label">
          7. Biggest Challenges:
        </label>
        <textarea
          className="form-control"
          id="challenges"
          name="challenges"
          value={formData.challenges}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contactMethod" className="form-label">
          8. Preferred Contact Method:
        </label>
        <select
          className="form-select"
          id="contactMethod"
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="comments" className="form-label">
          9. Additional Comments:
        </label>
        <textarea
          className="form-control"
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <button type="submit" className="primary-btn" disabled={status.isSubmitting}>
        {status.isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form >
  );
};

export default PartnershipForm;
