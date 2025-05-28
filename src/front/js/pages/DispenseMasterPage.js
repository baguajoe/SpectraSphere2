import React from 'react';

const DispenseMasterPage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>DispenseMaster</h1>
          <p className="subheading">From Seed to Sale, DispenseMaster Manages It All.</p>
        </div>
      </header>

      <section className="app-intro text-center">

        DispenseMaster is built for grow farms, seedbanks, and dispensaries. It features AI-powered
        price comparison, inventory, compliance tracking, and CRM. Fully integrated with LeafBridgeConnect:
        a job board and networking site where cannabis professionals and enthusiasts can create
        profiles, apply to jobs, and connect with others in the industry.

      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature"><h3>Seed-to-Sale Tracking</h3><p>Manage full lifecycle from farm to shelf.</p></div>
          <div className="feature"><h3>AI Inventory & Pricing</h3><p>Optimize cost, compare availability in real-time.</p></div>
          <div className="feature"><h3>Loyalty & CRM</h3><p>Track customers, vendors, and loyalty programs.</p></div>
          <div className="feature"><h3>Compliance Tools</h3><p>Export regulatory data in one click.</p></div>
          <div className="feature"><h3>LeafBridgeConnect</h3><p>Network and hire talent with integrated job board + profiles.</p></div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className='container py-4'>
          <div className="get-in-touch-card">
            <h2>Contact for Updates</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Notify Me</button>
            </form>
            <p className="privacy-note">Stay in the loop on our official release timeline.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DispenseMasterPage;
