import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>DispenseMaster: Dispense Smarter, Grow Faster</h1>
      <p>
        "DispenseMaster is your all-in-one platform for managing dispensary operations. From inventory
        tracking and order processing to customer relationship management (CRM) and regulatory compliance, our
        app simplifies every aspect of your business."
      </p>
      <div className="buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </header>
  );
};

export default Header;
