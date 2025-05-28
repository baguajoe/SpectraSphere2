import React from "react";

const ServicesPage = () => {
    return (
        <div style={{ backgroundColor: "#002040" }} >
            <div className="container py-5">
                <h1 className="text-center text-success mb-5">Our Services</h1>

                <div className="features-grid">
                    <ServiceCard
                        title="API Development Package"
                        price="$1500–$3000"
                        description="Custom FastAPI backend development including Authentication, CRUD operations, and AWS deployment."
                    />
                    <ServiceCard
                        title="Machine Learning Model Deployment"
                        price="$2000–$4000"
                        description="Host and deploy AI models (TensorFlow) with FastAPI, Docker, and AWS setup for real-time inference."
                    />
                    <ServiceCard
                        title="Computer Vision Applications"
                        price="$2500–$5000"
                        description="Development of face detection, 3D mesh generation, and pose tracking applications."
                    />
                    <ServiceCard
                        title="Streaming Platform Setup"
                        price="$3000–$6000"
                        description="Build custom WebRTC audio/video streaming platforms with authentication, payments, and merch integrations."
                    />
                    <ServiceCard
                        title="CRM / Business Management Systems"
                        price="$3500–$7000"
                        description="Full CRM, POS, Loyalty Programs, and Inventory Management platforms tailored for businesses."
                    />
                    <ServiceCard
                        title="3D Avatar Creation Package"
                        price="$2500–$4500"
                        description="AI-powered selfie-to-avatar generation and rigging system ready for VR/3D environments."
                    />
                    <ServiceCard
                        title="Motion Capture (MoCap) Integration"
                        price="$3000–$5500"
                        description="Real-time motion tracking and animation integration for avatars and VR worlds."
                    />
                    <ServiceCard
                        title="3D Animation and FX Package"
                        price="$4000–$7000"
                        description="Custom 3D character rigging, short gesture animations, and basic visual FX integration for VR, games, and media. For full 3D short films or cinematic projects, please contact us to discuss your vision."
                    />
                </div>

                {/* Pricing Disclaimer Section */}
                <section className="container text-center my-5">
                    <div className="p-4 shadow-sm">
                        <h5 className="text-success">Pricing Disclaimer</h5>
                        <p className="mt-3 text-white">
                            All pricing listed reflects starting rates based on typical project scopes.
                            Final pricing may vary depending on the complexity of the project, timeline, animation detail, special effects, and revision rounds.
                        </p>
                        <p className="text-white">
                            For custom projects such as 3D cinematic shorts, multi-character animations, or advanced VR integrations, please contact Eye Forge Studios directly to discuss your project vision and receive a personalized quote.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

const ServiceCard = ({ title, price, description }) => (
    <div className="card feature p-4 mb-4">
        <h3>{title}</h3>
        <h5 style={{ color: "#C2FFCB" }}>{price}</h5>
        <p className="mt-3">{description}</p>
    </div>
);

export default ServicesPage;
