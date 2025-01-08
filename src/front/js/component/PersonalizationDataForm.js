import React, { useState } from "react";
import "../../styles/landingPage.css"; // Ensure your styles are linked


const PersonalizationDataForm = () => {
  const [formData, setFormData] = useState({
    favoriteStrain: "",
    category: "",
    effects: [],
    flavor: "",
    consumptionMethod: "",
    potencyPreference: "",
    preferredTime: "",
    healthConditions: "",
    productTypes: [],
    priceRange: "",
    experienceLevel: "",
    socialSetting: "",
    energyLevel: "",
    goals: "",
    activityPreference: "",
    moodPreference: "",
    frequency: "",
    storagePreference: "",
    allergies: "",
    packageType: "",
    tasteSensitivity: "",
    preferredVendors: "",
    additionalComments: "",
  });

  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });

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

  const productTypesOptions = [
    "Flower",
    "Concentrates",
    "Edibles",
    "Topicals",
    "Tinctures",
    "Capsules",
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

  const handleCheckboxChange = (e, field) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].includes(value)
        ? prevData[field].filter((item) => item !== value)
        : [...prevData[field], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, isSubmitting: true });

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/personalization-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit personalization data form");
      }

      // Clear form on success
      setFormData({
        favoriteStrain: "",
        category: "",
        effects: [],
        flavor: "",
        consumptionMethod: "",
        potencyPreference: "",
        preferredTime: "",
        healthConditions: "",
        productTypes: [],
        priceRange: "",
        experienceLevel: "",
        socialSetting: "",
        energyLevel: "",
        goals: "",
        activityPreference: "",
        moodPreference: "",
        frequency: "",
        storagePreference: "",
        allergies: "",
        packageType: "",
        tasteSensitivity: "",
        preferredVendors: "",
        additionalComments: "",
      });

      setStatus({
        message: data.message || "Thank you for submitting your preferences!",
        isError: false,
        isSubmitting: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        message: error.message || "Something went wrong. Please try again.",
        isError: true,
        isSubmitting: false,
      });
    }
  };

  return (
    <form className="personalization-form" onSubmit={handleSubmit}>
      <h2>Tell Us About Your Preferences</h2>

      {status.message && (
        <div className={`alert ${status.isError ? "alert-error" : "alert-success"}`}>
          {status.message}
        </div>
      )}

      <label htmlFor="favoriteStrain">1. What is your favorite strain?</label>
      <input
        type="text"
        id="favoriteStrain"
        name="favoriteStrain"
        value={formData.favoriteStrain}
        onChange={handleChange}
      />

      <label htmlFor="category">2. Do you prefer Indica, Sativa, or Hybrid?</label>
      <select id="category" name="category" value={formData.category} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Indica">Indica</option>
        <option value="Sativa">Sativa</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <label>3. Desired Effects (Select all that apply):</label>
      <div className="checkboxes">
        {effectsOptions.map((effect) => (
          <div key={effect}>
            <input
              type="checkbox"
              id={effect}
              value={effect}
              checked={formData.effects.includes(effect)}
              onChange={(e) => handleCheckboxChange(e, "effects")}
            />
            <label htmlFor={effect}>{effect}</label>
          </div>
        ))}
      </div>

      {/* <label htmlFor="flavor">4. Favorite Flavor/Aroma:</label>
      <input
        type="text"
        id="flavor"
        name="flavor"
        value={formData.flavor}
        onChange={handleChange}
      />
       */}
      <label htmlFor="flavor">4. Favorite Flavor/Aroma:</label>
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

      <label htmlFor="consumptionMethod">5. Preferred Method of Consumption:</label>
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

      <label htmlFor="potencyPreference">6. Do you prefer THC, CBD, or a mix?</label>
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

      <label htmlFor="preferredTime">7. Preferred Time of Use:</label>
      <select
        id="preferredTime"
        name="preferredTime"
        value={formData.preferredTime}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>

      <label htmlFor="healthConditions">8. Do you have any health conditions?</label>
      <input
        type="text"
        id="healthConditions"
        name="healthConditions"
        value={formData.healthConditions}
        onChange={handleChange}
      />

      <label>9. Which product types are you interested in? (Select all that apply):</label>
      <div className="checkboxes">
        {productTypesOptions.map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              id={type}
              value={type}
              checked={formData.productTypes.includes(type)}
              onChange={(e) => handleCheckboxChange(e, "productTypes")}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>

      <label htmlFor="priceRange">10. What is your preferred price range?</label>
      <input
        type="text"
        id="priceRange"
        name="priceRange"
        placeholder="$50-$100"
        value={formData.priceRange}
        onChange={handleChange}
      />

      <label htmlFor="experienceLevel">11. How experienced are you?</label>
      <select
        id="experienceLevel"
        name="experienceLevel"
        value={formData.experienceLevel}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>

      <label htmlFor="socialSetting">12. Do you prefer to use in social settings or alone?</label>
      <select
        id="socialSetting"
        name="socialSetting"
        value={formData.socialSetting}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Social">Social</option>
        <option value="Solo">Solo</option>
      </select>

      <label htmlFor="energyLevel">13. Do you prefer products that boost or reduce energy?</label>
      <select
        id="energyLevel"
        name="energyLevel"
        value={formData.energyLevel}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Boost">Boost</option>
        <option value="Reduce">Reduce</option>
      </select>

      <label htmlFor="goals">14. What are your goals? (e.g., relaxation, creativity, focus)</label>
      <input
        type="text"
        id="goals"
        name="goals"
        value={formData.goals}
        onChange={handleChange}
      />

      <label htmlFor="activityPreference">15. Do you prefer active or passive activities while using?</label>
      <select
        id="activityPreference"
        name="activityPreference"
        value={formData.activityPreference}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Active">Active</option>
        <option value="Passive">Passive</option>
      </select>

      <label htmlFor="moodPreference">16. Do you want to enhance or stabilize your mood?</label>
      <select
        id="moodPreference"
        name="moodPreference"
        value={formData.moodPreference}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Enhance">Enhance</option>
        <option value="Stabilize">Stabilize</option>
      </select>

      <label htmlFor="frequency">17. How frequently do you consume these products?</label>
      <select
        id="frequency"
        name="frequency"
        value={formData.frequency}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Occasionally">Occasionally</option>
      </select>

      <label htmlFor="storagePreference">18. Do you have specific storage preferences?</label>
      <input
        type="text"
        id="storagePreference"
        name="storagePreference"
        placeholder="e.g., airtight containers"
        value={formData.storagePreference}
        onChange={handleChange}
      />

      <label htmlFor="allergies">19. Do you have any allergies or sensitivities?</label>
      <input
        type="text"
        id="allergies"
        name="allergies"
        placeholder="List any known allergies"
        value={formData.allergies}
        onChange={handleChange}
      />

      <label htmlFor="packageType">20. What packaging type do you prefer?</label>
      <select
        id="packageType"
        name="packageType"
        value={formData.packageType}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Reusable">Reusable</option>
        <option value="Single-use">Single-use</option>
        <option value="Eco-friendly">Eco-friendly</option>
      </select>

      <label htmlFor="tasteSensitivity">21. Are you sensitive to taste?</label>
      <select
        id="tasteSensitivity"
        name="tasteSensitivity"
        value={formData.tasteSensitivity}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label htmlFor="preferredVendors">22. Do you have preferred vendors or brands?</label>
      <input
        type="text"
        id="preferredVendors"
        name="preferredVendors"
        value={formData.preferredVendors}
        onChange={handleChange}
      />

      <label htmlFor="additionalComments">23. Additional Comments:</label>
      <textarea
        id="additionalComments"
        name="additionalComments"
        placeholder="Tell us more about your preferences, goals, or experiences..."
        value={formData.additionalComments}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="primary-btn" disabled={status.isSubmitting}>
        {status.isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default PersonalizationDataForm;
