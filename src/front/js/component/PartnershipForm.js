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

  const handleGoalsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      goals: prevData.goals.includes(value)
        ? prevData.goals.filter((goal) => goal !== value)
        : [...prevData.goals, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add functionality to send the form data to the backend
  };

  return (
    <form className="partnership-form" onSubmit={handleSubmit}>
      <h2>Partner with Us</h2>

      <label htmlFor="email">1. Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="businessName">2. Business Name:</label>
      <input
        type="text"
        id="businessName"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        required
      />

      <label htmlFor="businessType">3. Business Type:</label>
      <select
        id="businessType"
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Dispensary">Dispensary</option>
        <option value="Grower">Grower</option>
        <option value="Seedbank">Seedbank</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="location">4. Location (City, State):</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label>5. Partnership Goals (Select all that apply):</label>
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
      </div>

      <label htmlFor="currentTools">6. Current Tools or Platforms:</label>
      <textarea
        id="currentTools"
        name="currentTools"
        value={formData.currentTools}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="challenges">7. Biggest Challenges:</label>
      <textarea
        id="challenges"
        name="challenges"
        value={formData.challenges}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="contactMethod">8. Preferred Contact Method:</label>
      <select
        id="contactMethod"
        name="contactMethod"
        value={formData.contactMethod}
        onChange={handleChange}
      >
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>

      <label htmlFor="comments">9. Additional Comments:</label>
      <textarea
        id="comments"
        name="comments"
        value={formData.comments}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="primary-btn">
        Submit
      </button>
    </form>
  );
};

export default PartnershipForm;
