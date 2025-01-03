import React from "react";

const GetInTouch = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    }
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
          ></textarea>
          <label>Areas of Interest:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="interest"
                value="Updates on DispenseMaster"
              />
              Updates on DispenseMaster
            </label>
            <label>
              <input
                type="checkbox"
                name="interest"
                value="Updates on LeafBridgeConnect"
              />
              Updates on LeafBridgeConnect
            </label>
            <label>
              <input
                type="checkbox"
                name="interest"
                value="Partnership Opportunities"
              />
              Partnership Opportunities
            </label>
            <label>
              <input
                type="checkbox"
                name="interest"
                value="Educational Content"
              />
              Educational Content
            </label>
            <label>
              <input
                type="checkbox"
                name="interest"
                value="Job Opportunities"
              />
              Job Opportunities
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
