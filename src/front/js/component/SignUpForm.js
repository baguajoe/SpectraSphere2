import React, { useState } from "react";
import "../../styles/landingPage.css"; // Ensure your styles are linked

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    favoriteStrain: "",
    category: "",
    effects: [],
    flavor: "",
    consumptionMethod: "",
    potencyPreference: "",
    comments: "",
  });

  const [message, setMessage] = useState("");

  const effectsOptions = [
    "Relaxation",
    "Energy",
    "Focus",
    "Creativity",
    "Pain Relief",
    "Stress Relief",
    "Euphoria",
    "Appetite Stimulation",
    "Better Sleep",
  ];

  const consumptionMethods = [
    "Smoking",
    "Vaping",
    "Edibles",
    "Tinctures or Oils",
    "Topicals",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEffectsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      effects: prevData.effects.includes(value)
        ? prevData.effects.filter((effect) => effect !== value)
        : [...prevData.effects, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for signing up!");
        setFormData({
          email: "",
          favoriteStrain: "",
          category: "",
          effects: [],
          flavor: "",
          consumptionMethod: "",
          potencyPreference: "",
          comments: "",
        });
      } else {
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setMessage("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up for Updates</h2>
      <p>Tell us what you’re looking for, and we’ll keep you informed!</p>

      <label htmlFor="email">1. Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="favoriteStrain">2. What is your favorite strain?</label>
      <input
        type="text"
        id="favoriteStrain"
        name="favoriteStrain"
        placeholder="e.g., Purple Haze, Blue Dream"
        value={formData.favoriteStrain}
        onChange={handleChange}
      />

      <label htmlFor="category">3. Do you prefer Indica, Sativa, or Hybrid?</label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Indica">Indica</option>
        <option value="Sativa">Sativa</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <label>4. Desired Effects (Select all that apply):</label>
      <div className="effects-checkboxes">
        {effectsOptions.map((effect) => (
          <div key={effect}>
            <input
              type="checkbox"
              id={effect}
              value={effect}
              checked={formData.effects.includes(effect)}
              onChange={handleEffectsChange}
            />
            <label htmlFor={effect}>{effect}</label>
          </div>
        ))}
      </div>

      <label htmlFor="flavor">5. Favorite Flavor/Aroma:</label>
      <select
        id="flavor"
        name="flavor"
        value={formData.flavor}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Citrus">Citrus</option>
        <option value="Earthy">Earthy</option>
        <option value="Pine">Pine</option>
        <option value="Sweet">Sweet</option>
        <option value="Spicy">Spicy</option>
      </select>

      <label htmlFor="consumptionMethod">6. Preferred Method of Consumption:</label>
      <select
        id="consumptionMethod"
        name="consumptionMethod"
        value={formData.consumptionMethod}
        onChange={handleChange}
      >
        <option value="">Select</option>
        {consumptionMethods.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>

      <label htmlFor="potencyPreference">7. Do you prefer THC, CBD, or a mix?</label>
      <select
        id="potencyPreference"
        name="potencyPreference"
        value={formData.potencyPreference}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="High THC">High THC</option>
        <option value="CBD Dominant">CBD Dominant</option>
        <option value="Balanced Mix">Balanced Mix</option>
      </select>

      <label htmlFor="comments">8. Additional Comments:</label>
      <textarea
        id="comments"
        name="comments"
        placeholder="Tell us more about your preferences, goals, or experiences..."
        value={formData.comments}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="primary-btn">
        Submit
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
};

export default SignUpForm;
