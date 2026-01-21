import { MapPin, Route, Calendar } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            icon: MapPin,
            title: 'Enter Your Trip',
            description: 'Add your origin, destination, dates, and preferences.'
        },
        {
            number: '02',
            icon: Route,
            title: 'Compare Routes',
            description: 'We show the best train and flight options instantly.'
        },
        {
            number: '03',
            icon: Calendar,
            title: 'Build Your Plan',
            description: 'Customize stays, budget, and daily itinerary.'
        }
    ];

    return (
        <section className="how-it-works-section">
            <div className="how-it-works-container">
                <div className="how-it-works-header">
                    <h2>Plan smarter in 3 simple steps</h2>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="step-card">
                                <span className="step-number">{step.number}</span>
                                <div className="step-icon">
                                    <Icon />
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
