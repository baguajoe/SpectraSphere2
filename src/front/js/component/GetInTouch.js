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
        Stay connected with <strong>DispenseMaster</strong> and <strong>LeafBridgeConnect</strong>! 
        Subscribe to receive updates on the latest features, industry insights, and exclusive deals tailored 
        for dispensaries, grow farms, seed banks, and cannabis professionals.
      </p>
      <p>
        <strong>What is LeafBridgeConnect?</strong> It's a professional networking platform designed exclusively for the 
        cannabis industry. Whether you’re looking to expand your network, collaborate with industry leaders, 
        or discover new business opportunities, LeafBridgeConnect helps you connect and grow.
      </p>
      <p>
        By subscribing, you’ll gain access to tools, networking opportunities, product deals, and more—all designed 
        to help you streamline operations and build valuable connections across the cannabis ecosystem.
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
