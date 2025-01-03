import React from "react";

const EarlyAccess = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://127.0.0.1:5000/early-access", {
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
      alert("Early access request failed. Please try again.");
    }
  };

  return (
    <section className="early-access">
      <div className="early-access-card">
        <h2>Join Early Access</h2>
        <p>
          Be among the first to experience the power of <strong>DispenseMaster</strong> and{" "}
          <strong>LeafBridgeConnect</strong>. Shape the future of cannabis technology
          by providing feedback and gaining early access to new features.
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
            name="reason"
            placeholder="Why are you interested in early access?"
            rows="4"
            required
          ></textarea>
          <button type="submit">Join Early Access</button>
        </form>
      </div>
    </section>
  );
};

export default EarlyAccess;
