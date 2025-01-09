import React from "react";
import { useNavigate } from "react-router-dom";

const Features = ({ features }) => {
    const navigate = useNavigate();

    const handleFeatureComparisonClick = () => {
        navigate("/features"); // Navigate to the Feature Comparison page
    };

    const defaultFeatures = [
        {
            title: "AI-Powered DispenseMatch",
            description: (
                <>
                    <strong>"Find the Best Deals, Faster."</strong>
                    <p>
                        Leverage AI to compare real-time prices, deals, and inventory across dispensaries, grow farms, and seedbanks. Optimize procurement with automated suggestions tailored to your needs.
                    </p>
                    <ul>
                        <li>
                            <strong>Real-Time Deal Finder:</strong> Instantly compare prices and promotions.
                        </li>
                        <li>
                            <strong>Dynamic Inventory Search:</strong> Locate stock across connected locations.
                        </li>
                        <li>
                            <strong>AI-Driven Recommendations:</strong> Get personalized vendor and product suggestions.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Price Comparison Feature",
            description: (
                <>
                    <strong>"Compare Prices, Availability, and More."</strong>
                    <p>
                        Empower your customers with the ability to compare prices, availability, and other product details across multiple dispensaries—all in real time.
                    </p>
                    <ul>
                        <li>
                            <strong>Search for Products:</strong> Use keywords or filters to find desired products.
                        </li>
                        <li>
                            <strong>View Pricing Details:</strong> Instantly access prices, availability, and ratings.
                        </li>
                        <li>
                            <strong>Compare Options:</strong> Analyze discounts and deals to make informed decisions.
                        </li>
                        <li>
                            <strong>Seamless Checkout:</strong> Reserve or purchase directly through the app.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "CRM for All Stakeholders",
            description: (
                <>
                    <strong>"Building Stronger Relationships Across the Cannabis Industry."</strong>
                    <p>
                        Manage relationships with customers, vendors, and partners using tools tailored for cannabis businesses. Foster collaboration and streamline communication for better results.
                    </p>
                    <ul>
                        <li>
                            <strong>360-Degree Profiles:</strong> Track interactions, orders, and preferences.
                        </li>
                        <li>
                            <strong>Customer Engagement:</strong> Use loyalty programs and targeted promotions.
                        </li>
                        <li>
                            <strong>Vendor Collaboration:</strong> Streamline partnerships and deliveries.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Unified Operations",
            description: (
                <>
                    Manage your cannabis business seamlessly with tools for inventory, compliance, and trend analysis. Save time, improve collaboration, and make smarter decisions with data-driven insights.
                    <ul>
                        <li>
                            <strong>Real-Time Inventory:</strong> Monitor stock with automated alerts.
                        </li>
                        <li>
                            <strong>Compliance Tracking:</strong> Stay ahead with built-in regulatory tools.
                        </li>
                        <li>
                            <strong>Customizable Dashboards:</strong> Focus on metrics that matter.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "From Seed to Sale",
            description: (
                <>
                    <strong>"Simplify Your Cannabis Operations."</strong>
                    <p>
                        Unify your entire cannabis supply chain—grow farms, seedbanks, and dispensaries—into one platform. Streamline processes, reduce manual work, and ensure compliance at every step.
                    </p>
                    <ul>
                        <li>
                            <strong>Real-Time Inventory:</strong> Track stock across all stages.
                        </li>
                        <li>
                            <strong>Order Processing:</strong> Automate fulfillment and delivery tracking.
                        </li>
                        <li>
                            <strong>Batch Tracking:</strong> Ensure quality and meet compliance standards.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Mobile and iPad-Friendly POS",
            description: (
                <>
                    <strong>"Streamline Your Sales on the Go."</strong>
                    <p>
                        DispenseMaster ensures flexibility with a fully optimized point-of-sale system designed for mobile devices and iPads. Manage your cannabis business effortlessly, no matter where you are.
                    </p>
                    <ul>
                        <li>
                            <strong>Seamless Compatibility:</strong> Access your POS system from any mobile device or iPad.
                        </li>
                        <li>
                            <strong>On-the-Go Management:</strong> Monitor sales, inventory, and compliance wherever you are.
                        </li>
                        <li>
                            <strong>Enhanced Usability:</strong> Simplify transactions and data tracking with an intuitive interface.
                        </li>
                        <li>
                            <strong>Cloud-Based Accessibility:</strong> Keep your data synchronized and secure in real-time.
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    const displayFeatures = features || defaultFeatures;

    return (
        <section className="features">
            <h2>Comprehensive Features for Dispensaries, Grow Farms, and Seed Banks</h2>
            <div className="features-grid">
                {displayFeatures.map((feature, index) => (
                    <div key={index} className="feature">
                        <h3>{feature.title}</h3>
                        <div>{feature.description}</div>
                        {/* Add CTA button */}

                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button
                    className="cta-buttons mt-4"
                    onClick={handleFeatureComparisonClick}
                >
                    Compare Features
                </button>
            </div>
        </section>
    );
};

export default Features;
