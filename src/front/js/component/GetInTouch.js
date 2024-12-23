import React from 'react';

const GetInTouch = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const name = e.target[1].value;

    try {
      const response = await fetch('http://127.0.0.1:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <section className="get-in-touch">
      <h2>Get In Touch</h2>
      <p>
        Stay connected with DispenseMaster! Subscribe to receive updates on the latest features, industry
        insights, and exclusive deals tailored for dispensaries, grow farms, and seed banks.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Full name" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default GetInTouch;
