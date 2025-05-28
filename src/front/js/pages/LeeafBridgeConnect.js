import React from 'react';

const LeafBridgeConnectPage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>LeafBridgeConnect</h1>
          <p className="subheading">Where the Cannabis Industry Connects and Grows</p>
        </div>
      </header>

      <section className="app-intro text-center">
        LeafBridgeConnect is a professional networking platform for the cannabis industry.
        Dispensaries, seedbanks, grow farms, and industry professionals can connect, hire,
        share content, and educate each other in a trusted, business-focused environment.
      </section>

      <section className="features py-5">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Professional Networking</h3>
            <p>Connect with dispensaries, growers, and seedbanks across the cannabis sector.</p>
          </div>
          <div className="feature">
            <h3>Job Board & Company Pages</h3>
            <p>Post jobs or apply to work with cannabis companies nationwide.</p>
          </div>
          <div className="feature">
            <h3>Video Uploads</h3>
            <p>Share product showcases, growing tips, or educational content via video.</p>
          </div>
          <div className="feature">
            <h3>How-To Training Hub</h3>
            <p>Upload and access training videos for cannabis business skills and compliance.</p>
          </div>
          <div className="feature">
            <h3>Connection Tools</h3>
            <p>Like, favorite, share, and follow profiles for stronger relationship building.</p>
          </div>
          <div className="feature">
            <h3>Free & Pro Access</h3>
            <p>Basic access is free; Pro tiers unlock premium content and features.</p>
          </div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className='container py-4'>
          <div className="get-in-touch-card">
            <h2>Join LeafBridgeConnect</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Join Now</button>
            </form>
            <p className="privacy-note">Get early access and become a founding member of the cannabis industry’s top network.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeafBridgeConnectPage;
