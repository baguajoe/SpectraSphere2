import React from 'react';

const VitalScopePage = () => {
 return (
   <div>
     <header className="header">
       <div className="header-content">
         <h1>MyVitalScope</h1>
         <p className="subheading">Optimize Your Biology. Extend Your Healthspan.</p>
       </div>
     </header>

     <section className="app-intro text-center">
       VitalScope transforms your health data into personalized longevity insights and 
       your voice into health biomarkers. Combining cutting-edge AI with holistic 
       wellness approaches, it's your comprehensive platform for maximizing lifespan 
       and optimizing biological age.
     </section>

     <section className="features py-5">
       <h2>Key Features</h2>
       <div className="features-grid">
         <div className="feature">
           <h3>🤖 AI Longevity Coach</h3>
           <p>Get personalized daily recommendations based on your unique biometric patterns and health data.</p>
         </div>
         <div className="feature">
           <h3>🎤 Voice Biomarker Analysis</h3>
           <p>Analyze stress levels, energy patterns, and health indicators through voice recordings.</p>
         </div>
         <div className="feature">
           <h3>📊 Multi-Device Integration</h3>
           <p>Seamlessly connect Fitbit, Oura, Apple Watch, and other wearables in one dashboard.</p>
         </div>
         <div className="feature">
           <h3>🧘 Holistic Wellness Paths</h3>
           <p>Choose Eastern, Western, or Hybrid approaches with VR meditation and personalized protocols.</p>
         </div>
         <div className="feature">
           <h3>🔮 Predictive Health Analytics</h3>
           <p>Advanced AI models predict potential health issues before symptoms appear.</p>
         </div>
         <div className="feature">
           <h3>📈 Biological Age Tracking</h3>
           <p>Monitor how fast you're aging and get actionable steps to slow down the process.</p>
         </div>
       </div>
     </section>

     <section className="get-in-touch">
       <div className='container py-4'>
         <div className="get-in-touch-card">
           <h2>Join the MyVitalScope Beta</h2>
           <form>
             <input type="email" placeholder="Enter your email" required />
             <button type="submit">Join Beta</button>
           </form>
           <p className="privacy-note">You'll get early access + exclusive longevity insights and personalized health optimization tips.</p>
         </div>
       </div>
     </section>
   </div>
 );
};

export default VitalScopePage;