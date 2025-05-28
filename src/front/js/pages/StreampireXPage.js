import React from 'react';

const StreampireXPage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>StreampireX</h1>
          <p className="subheading">Unleash Your Sound. Stream. Monetize. Grow.</p>
        </div>
      </header>

      <section className="app-intro text-center">
        StreampireX lets creators stream live DJ sets, host podcasts, launch internet radio channels, sell merch,
        and engage fans with real-time VR listening parties and virtual concerts. It includes monetization (tips,
        subscriptions), podcast scheduler, avatar integration, and ticketing for indie musicians, producers,
        and singers.
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid text-center">
          <div className="feature"><h3>Live Streaming</h3><p>Stream HD audio/video to your fans instantly.</p></div>
          <div className="feature"><h3>Podcast + Paywall</h3><p>Publish episodes, set subscription levels.</p></div>
          <div className="feature"><h3>Radio Station Hosting</h3><p>Launch your own indie internet radio show.</p></div>
          <div className="feature"><h3>Virtual Concerts</h3><p>Host ticketed events in 3D or VR with avatars.</p></div>
          <div className="feature"><h3>Creator Store</h3><p>Sell beats, digital products, or merch.</p></div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className="container py-4">
          <div className="get-in-touch-card">
            <h2>Join the StreampireX Waitlist</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Join Now</button>
            </form>
            <p className="privacy-note">No spam. Just the latest updates on launch.</p>
          </div>
        </div>
      </section>

    </div >
  );
};

export default StreampireXPage;
