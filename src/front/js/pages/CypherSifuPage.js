import React from 'react';

const CypherSifuPage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>CypherSifu</h1>
          <p className="subheading">Train Your Flow. Master Your Sound.</p>
        </div>
      </header>

      <section className="app-intro text-center">
        CypherSifu turns your voice into beats and your flow into an art form. Powered by AI, it helps vocal artists train like martial artists — with rhythm, feedback, and community challenges built in.
      </section>

      <section className="features py-5">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature"><h3>Voice-to-Beat Generator</h3><p>Transform any vocal into a custom beat using AI.</p></div>
          <div className="feature"><h3>AI Flow Sifu</h3><p>Analyze your timing, delivery, breath control, and more.</p></div>
          <div className="feature"><h3>Cypher Training Dojo</h3><p>Level up with structured drills and tempo challenges.</p></div>
          <div className="feature"><h3>Beat Customization</h3><p>Fine-tune your beats with genre, loop, and FX controls.</p></div>
          <div className="feature"><h3>Recording Booth</h3><p>Record layered takes with effects and mixdown tools.</p></div>
          <div className="feature"><h3>Harmony Assistant</h3><p>AI-suggested melodies and harmonies for your vocals.</p></div>
          <div className="feature"><h3>Progress Dashboard</h3><p>Track growth in pitch, timing, and breath efficiency.</p></div>
          <div className="feature"><h3>Genre Style Selector</h3><p>Switch between Hip-Hop, Trap, Afrobeat, Grime & more.</p></div>
          <div className="feature"><h3>Collab Hub</h3><p>Share, join cyphers, and challenge other artists.</p></div>
          <div className="feature"><h3>Quick-Fire Mode</h3><p>Tap-to-record voice ideas on the go.</p></div>
          <div className="feature"><h3>Freestyle Flow Trainer</h3><p>Sharpen improv with prompts, tempo shifts, and more.</p></div>
          <div className="feature"><h3>Pocket Sampler</h3><p>Record and chop any sound from your environment into beats. Auto-loop detection and beat matching included.</p></div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className='container py-4'>
          <div className="get-in-touch-card">
            <h2>Join the CypherSifu Beta</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Join Beta</button>
            </form>
            <p className="privacy-note">Get early access and shape the future of vocal mastery.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CypherSifuPage;
