import React, { useState } from "react";

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

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleCheckboxChange = (e, field) => {
    const { value } = e.target;
    const updatedValues = formData[field].includes(value)
      ? formData[field].filter((item) => item !== value)
      : [...formData[field], value];
    setFormData({ ...formData, [field]: updatedValues });
    setTouched({ ...touched, [field]: true });
  };

  const getValidationMessage = (fieldName) => {
    if (!touched[fieldName]) return "";

    switch (fieldName) {
      case "favoriteStrain":
        return !formData.favoriteStrain ? "Favorite strain is required" : "";
      case "category":
        return !formData.category ? "Please select a category" : "";
      case "effects":
        return formData.effects.length === 0 ? "Please select at least one effect" : "";
      case "consumptionMethod":
        return !formData.consumptionMethod ? "Consumption method is required" : "";
      case "potencyPreference":
        return !formData.potencyPreference ? "Potency preference is required" : "";
      case "preferredTime":
        return !formData.preferredTime ? "Preferred time is required" : "";
      case "priceRange":
        return !formData.priceRange ? "Price range is required" : "";
      case "experienceLevel":
        return !formData.experienceLevel ? "Experience level is required" : "";
      case "goals":
        return !formData.goals ? "Goals are required" : "";
      case "frequency":
        return !formData.frequency ? "Frequency is required" : "";
      case "allergies":
        return !formData.allergies ? "Please specify allergies or enter 'None'" : "";
      default:
        return "";
    }
  };

  const isFieldInvalid = (fieldName) => {
    return touched[fieldName] && getValidationMessage(fieldName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark required fields as touched
    const requiredFields = {
      favoriteStrain: true,
      category: true,
      effects: true,
      consumptionMethod: true,
      potencyPreference: true,
      preferredTime: true,
      priceRange: true,
      experienceLevel: true,
      goals: true,
      frequency: true,
      allergies: true
    };
    setTouched(requiredFields);

    // Check if any required fields are empty
    const hasEmptyRequiredFields = Object.keys(requiredFields).some(field => {
      if (field === 'effects') {
        return formData[field].length === 0;
      }
      return !formData[field];
    });

    if (hasEmptyRequiredFields) {
      setStatus({
        message: "Please fill in all required fields",
        isError: true,
        isSubmitting: false
      });
      return;
    }

    setStatus({ message: "", isError: false, isSubmitting: true });

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/personalization-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
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
      setTouched({});

      alert("Thank you for filling out the Personlization Data Form. Your input is very valuable to us.")
      setStatus({
        message: data.message || "Thank you for sharing your preferences!",
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
    <form className="personalization-form" onSubmit={handleSubmit} noValidate>
      <h2>Tell Us About Your Preferences</h2>

      {status.message && (
        <div className={`alert ${status.isError ? 'alert-danger' : 'alert-success'} mb-4`}>
          {status.message}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="favoriteStrain">1. What is your favorite strain? *</label>
        <input
          type="text"
          className={`form-control ${isFieldInvalid('favoriteStrain') ? 'is-invalid' : ''}`}
          id="favoriteStrain"
          name="favoriteStrain"
          value={formData.favoriteStrain}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {isFieldInvalid('favoriteStrain') && (
          <div className="invalid-feedback">{getValidationMessage('favoriteStrain')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category">2. Do you prefer Indica, Sativa, or Hybrid? *</label>
        <select
          className={`form-select ${isFieldInvalid('category') ? 'is-invalid' : ''}`}
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="Indica">Indica</option>
          <option value="Sativa">Sativa</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        {isFieldInvalid('category') && (
          <div className="invalid-feedback">{getValidationMessage('category')}</div>
        )}
      </div>

      <div className="mb-3">
        <label>3. Desired Effects (Select all that apply): *</label>
        <div className={`card p-3 ${isFieldInvalid('effects') ? 'border-danger' : ''}`} style={{ background: 'transparent' }}>
          <div className="row">
            {effectsOptions.map((effect) => (
              <div className="col-md-6" key={effect}>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`effect-${effect}`}
                    value={effect}
                    checked={formData.effects.includes(effect)}
                    onChange={(e) => handleCheckboxChange(e, 'effects')}
                  />
                  <label className="form-check-label" htmlFor={`effect-${effect}`}>
                    {effect}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isFieldInvalid('effects') && (
          <div className="text-danger small mt-1">{getValidationMessage('effects')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="flavor">4. Favorite Flavor/Aroma:</label>
        <select
          className="form-select"
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
      </div>

      <div className="mb-3">
        <label htmlFor="consumptionMethod">5. Preferred Method of Consumption: *</label>
        <select
          className={`form-select ${isFieldInvalid('consumptionMethod') ? 'is-invalid' : ''}`}
          id="consumptionMethod"
          name="consumptionMethod"
          value={formData.consumptionMethod}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="Smoking">Smoking</option>
          <option value="Vaping">Vaping</option>
          <option value="Edibles">Edibles</option>
          <option value="Tinctures or Oils">Tinctures or Oils</option>
          <option value="Topicals">Topicals</option>
        </select>
        {isFieldInvalid('consumptionMethod') && (
          <div className="invalid-feedback">{getValidationMessage('consumptionMethod')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="potencyPreference">6. Do you prefer THC, CBD, or a mix? *</label>
        <select
          className={`form-select ${isFieldInvalid('potencyPreference') ? 'is-invalid' : ''}`}
          id="potencyPreference"
          name="potencyPreference"
          value={formData.potencyPreference}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="High THC">High THC</option>
          <option value="CBD Dominant">CBD Dominant</option>
          <option value="Balanced Mix">Balanced Mix</option>
        </select>
        {isFieldInvalid('potencyPreference') && (
          <div className="invalid-feedback">{getValidationMessage('potencyPreference')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="preferredTime">7. Preferred Time of Use: *</label>
        <select
          className={`form-select ${isFieldInvalid('preferredTime') ? 'is-invalid' : ''}`}
          id="preferredTime"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        {isFieldInvalid('preferredTime') && (
          <div className="invalid-feedback">{getValidationMessage('preferredTime')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="healthConditions">8. Do you have any health conditions?</label>
        <input
          type="text"
          className="form-control"
          id="healthConditions"
          name="healthConditions"
          value={formData.healthConditions}
          onChange={handleChange}
          placeholder="Optional - list any relevant health conditions"
        />
      </div>

      <div className="mb-3">
        <label>9. Which product types are you interested in?</label>
        <div className="card p-3" style={{ background: 'transparent' }}>
          <div className="row">
            {["Flower", "Concentrates", "Edibles", "Topicals", "Tinctures", "Capsules"].map((type) => (
              <div className="col-md-6" key={type}>
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`type-${type}`}
                    value={type}
                    checked={formData.productTypes.includes(type)}
                    onChange={(e) => handleCheckboxChange(e, 'productTypes')}
                  />
                  <label className="form-check-label" htmlFor={`type-${type}`}>
                    {type}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="priceRange">10. What is your preferred price range? *</label>
        <input
          type="text"
          className={`form-control ${isFieldInvalid('priceRange') ? 'is-invalid' : ''}`}
          id="priceRange"
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="$20-$150"
          required
        />
        {isFieldInvalid('priceRange') && (
          <div className="invalid-feedback">{getValidationMessage('priceRange')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="experienceLevel">11. How experienced are you? *</label>
        <select
          className={`form-select ${isFieldInvalid('experienceLevel') ? 'is-invalid' : ''}`}
          id="experienceLevel"
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        {isFieldInvalid('experienceLevel') && (
          <div className="invalid-feedback">{getValidationMessage('experienceLevel')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="socialSetting">12. Do you prefer to use in social settings or alone?</label>
        <select
          className="form-select"
          id="socialSetting"
          name="socialSetting"
          value={formData.socialSetting}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Social">Social</option>
          <option value="Solo">Solo</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="energyLevel">13. Do you prefer products that boost or reduce energy?</label>
        <select
          className="form-select"
          id="energyLevel"
          name="energyLevel"
          value={formData.energyLevel}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Boost">Boost</option>
          <option value="Reduce">Reduce</option>
          <option value="Neutral">Neutral</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="goals">14. What are your goals? (e.g., relaxation, creativity, focus) *</label>
        <input
          type="text"
          className={`form-control ${isFieldInvalid('goals') ? 'is-invalid' : ''}`}
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {isFieldInvalid('goals') && (
          <div className="invalid-feedback">{getValidationMessage('goals')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="activityPreference">15. Do you prefer active or passive activities while using?</label>
        <select
          className="form-select"
          id="activityPreference"
          name="activityPreference"
          value={formData.activityPreference}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Passive">Passive</option>
          <option value="Both">Both</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="moodPreference">16. Do you want to enhance or stabilize your mood?</label>
        <select
          className="form-select"
          id="moodPreference"
          name="moodPreference"
          value={formData.moodPreference}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Enhance">Enhance</option>
          <option value="Stabilize">Stabilize</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="frequency">17. How frequently do you consume these products? *</label>
        <select
          className={`form-select ${isFieldInvalid('frequency') ? 'is-invalid' : ''}`}
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        {isFieldInvalid('frequency') && (
          <div className="invalid-feedback">{getValidationMessage('frequency')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="storagePreference">18. Do you have specific storage preferences?</label>
        <input
          type="text"
          className="form-control"
          id="storagePreference"
          name="storagePreference"
          value={formData.storagePreference}
          onChange={handleChange}
          placeholder="e.g., airtight containers"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="allergies">19. Do you have any allergies or sensitivities? *</label>
        <input
          type="text"
          className={`form-control ${isFieldInvalid('allergies') ? 'is-invalid' : ''}`}
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="List any known allergies or enter 'None'"
          required
        />
        {isFieldInvalid('allergies') && (
          <div className="invalid-feedback">{getValidationMessage('allergies')}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="packageType">20. What packaging type do you prefer?</label>
        <select
          className="form-select"
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
      </div>

      <div className="mb-3">
        <label htmlFor="tasteSensitivity">21. Are you sensitive to taste?</label>
        <select
          className="form-select"
          id="tasteSensitivity"
          name="tasteSensitivity"
          value={formData.tasteSensitivity}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="preferredVendors">22. Do you have preferred vendors or brands?</label>
        <input
          type="text"
          className="form-control"
          id="preferredVendors"
          name="preferredVendors"
          value={formData.preferredVendors}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="additionalComments">23. Additional Comments:</label>
        <textarea
          className="form-control"
          id="additionalComments"
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          rows="3"
          placeholder="Tell us more about your preferences, goals, or experiences..."
        />
      </div>

      <button type="submit" className="primary-btn mt-4" disabled={status.isSubmitting}>
        {status.isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default PersonalizationDataForm;