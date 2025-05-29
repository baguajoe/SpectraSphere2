import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
    const navigate = useNavigate();

    const handleFeatureComparisonClick = () => {
        navigate("/features");
    };

    const defaultProducts = [
        {
            title: "StreampireX",
            subtitle: "Streaming, Radio, and Podcast Platform",
            description: (
                <>
                    <p>
                        Empowering DJs, podcasters, and indie creators to livestream performances, host custom radio stations and podcasts, sell merchandise, and launch VR events — all with built-in monetization.
                    </p>
                    <ul>
                        <li>Live Audio & Video Streaming</li>
                        <li>Custom Radio & Podcast Hosting</li>
                        <li>Merch Store Integration</li>
                        <li>VR Listening Parties with Ticketed Access</li>
                    </ul>
                </>
            ),
            link: "/streampirex"
        },


        {
            title: "DoppelFlex",
            subtitle: "AI-Powered Selfie-to-3D Avatar Creation & Real-Time Motion Capture",
            description: (
                <>
                    <p>
                        DoppelFlex transforms selfies into fully rigged, animated 3D avatars, ready for VR, gaming, and virtual content creation. Featuring AI mesh reconstruction, MediaPipe Pose tracking, and real-time MoCap animation.
                    </p>
                    <ul>
                        <li>AI-driven Selfie to 3D Mesh Conversion</li>
                        <li>Real-Time Motion Capture Animation</li>
                        <li>VR-Ready Avatar Export</li>
                        <li>In-App Rigging and Beat-Synced Animation</li>
                    </ul>
                </>
            ),
            link: "/doppelflex"
        },

        {
            title: "CypherSifu",
            subtitle: "AI Flow Coach & Voice-to-Beat Training App",
            description: (
                <>
                    <strong>"Train Your Flow. Master Your Sound."</strong>
                    <p>
                        CypherSifu transforms your voice into beats and your flow into a skillset. Combining AI music tools with martial arts-inspired training, it’s your dojo for becoming a vocal master.
                    </p>
                    <ul>
                        <li><strong>Voice-to-Beat Generator:</strong> Turn humming, singing, or speech into custom beats using AI rhythm analysis.</li>
                        <li><strong>AI Flow Sifu:</strong> Get real-time feedback on timing, delivery, breath control, and lyrical patterns.</li>
                        <li><strong>Cypher Training Dojo:</strong> Level up through structured sessions and earn belts as your skills evolve.</li>
                        <li><strong>Pocket Sampler:</strong> Record and chop any sound from your environment into beats. Sample your voice, instruments, or ambient noise with auto-loop detection and beat matching.</li>
                    </ul>
                </>
            ),
            link: "/cyphersifu"
        },

        {
            title: "VitalScope",
            subtitle: "AI-Powered Longevity Coach & Health Optimization Platform",
            description: (
                <>
                    <p>
                        Transform your health data into personalized longevity insights and optimize your biological age with cutting-edge AI. Combine wearable data, voice biomarkers, and holistic wellness for maximum healthspan.
                    </p>
                    <ul>
                        <li><strong>AI Longevity Coach:</strong> Personalized recommendations based on your unique biology.</li>
                        <li><strong>Voice Biomarker Analysis:</strong> Detect stress and health patterns through voice.</li>
                        <li><strong>Multi-Device Integration:</strong> Seamlessly connect Fitbit, Oura, Apple Watch, and more.</li>
                        <li><strong>Holistic Wellness Paths:</strong> Choose Eastern, Western, or Hybrid approaches.</li>
                    </ul>
                </>
            ),
            link: "/vitalscope"
        },

        {
            title: "DispenseMaster",
            subtitle: "CRM & B2B Management for the Cannabis Industry",
            description: (
                <>
                    <strong>"Building Stronger Relationships Across the Cannabis Industry."</strong>
                    <p>
                        Manage relationships with customers, vendors, and partners using tools tailored for cannabis businesses. Foster collaboration and streamline communication for better results.
                    </p>
                    <ul>
                        <li>360-Degree Profiles: Track interactions, orders, and preferences.</li>
                        <li>Customer Engagement: Use loyalty programs and targeted promotions.</li>
                        <li>Vendor Collaboration: Streamline partnerships and deliveries.</li>
                    </ul>
                </>
            ),
            link: "/dispensemaster"
        },


    ];

    const displayProducts = products || defaultProducts;

    return (
        <section className="features">
            <h2>Explore Our Applications</h2>
            <div className="features-grid">
                {displayProducts.map((product, index) => (
                    <div key={index} className="feature">
                        <h3>{product.title}</h3>
                        <h5>{product.subtitle}</h5>
                        <div>{product.description}</div>
                        <button
                            className="cta-buttons mt-4"
                            onClick={() => navigate(product.link)}
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
