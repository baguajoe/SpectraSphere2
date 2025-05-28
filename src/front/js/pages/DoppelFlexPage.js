import React from 'react';

const DoppelFlexPage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>DoppelFlex</h1>
          <p className="subheading">Create Your Avatar. Bring It to Life.</p>
        </div>
      </header>

      <section className="app-intro text-center">

        DoppelFlex lets users create 3D avatars from selfies, auto-rig them with bone structure,
        and sync movements using webcam motion capture. Ideal for VTubers, animators, musicians,
        dancers, and streamers.

      </section>

      <section className="features py-5">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature"><h3>Selfie to 3D Avatar</h3><p>Convert photos into detailed avatars.</p></div>
          <div className="feature"><h3>Auto-Rigging</h3><p>Instantly generate bone structure and skin weights.</p></div>
          <div className="feature"><h3>Live Motion Capture</h3><p>Animate with webcam using pose detection.</p></div>
          <div className="feature"><h3>Beat Sync</h3><p>Avatar dances and performs on rhythm.</p></div>
          <div className="feature"><h3>Export to FBX/GLB</h3><p>Compatible with Unity, Unreal, or StreampireX.</p></div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className='container py-4'>
          <div className="get-in-touch-card">
            <h2>Join the DoppelFlex Beta</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Join Beta</button>
            </form>
            <p className="privacy-note">You’ll get early access + feedback opportunities.</p>
          </div>
        </div>
      </section >
    </div >
  );
};

export default DoppelFlexPage;
