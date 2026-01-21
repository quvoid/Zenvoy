import { Sparkles, Home, DollarSign, Clock } from 'lucide-react';
import './WhyTripPlanner.css';

const WhyTripPlanner = () => {
    const features = [
        {
            icon: Sparkles,
            title: 'AI-Powered Routes',
            description: 'Smart algorithms find the best connections and optimal travel paths for your journey.'
        },
        {
            icon: Home,
            title: 'Smart Stay Plans',
            description: 'Curated accommodation suggestions that match your budget and preferences perfectly.'
        },
        {
            icon: DollarSign,
            title: 'Budget Control',
            description: 'Track expenses in real-time and get alerts when you\'re approaching your limits.'
        },
        {
            icon: Clock,
            title: 'Best Time to Travel',
            description: 'Data-driven insights on weather, crowds, and pricing to help you pick the perfect dates.'
        }
    ];

    return (
        <section className="why-section">
            <div className="why-container">
                <div className="why-header">
                    <h2>Why TripPlanner?</h2>
                    <p>Smarter planning. Better journeys.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <Icon />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyTripPlanner;
