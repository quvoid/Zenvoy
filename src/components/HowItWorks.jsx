import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight, Calendar, Route, ArrowDown } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Trigger only once
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when just 10% is visible
                rootMargin: '0px' // Remove negative margin to ensure it triggers
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const steps = [
        {
            id: "01",
            icon: <MapPin className="step-icon" />,
            title: "Enter Your Trip",
            description: "Add your origin, destination, dates, and preferences."
        },
        {
            id: "02",
            icon: <Route className="step-icon" />,
            title: "Compare Routes",
            description: "We show the best train and flight options instantly."
        },
        {
            id: "03",
            icon: <Calendar className="step-icon" />,
            title: "Build Your Plan",
            description: "Customize stays, budget, and daily itinerary."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className={`how-it-works-section ${isVisible ? 'animate-in' : ''}`}
        >
            <div className="section-header">
                <h2 className="section-title">
                    Plan smarter in <span className="title-gradient">3 simple steps</span>
                </h2>
            </div>

            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={step.id} className="step-wrapper">
                        {/* Step Card */}
                        <div className="step-card">
                            <div className="card-glow"></div>
                            <span className="step-number">{step.id}</span>
                            <div className="icon-wrapper">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>

                        {/* Desktop Connector Arrow (Only between 1-2 and 2-3) */}
                        {index < steps.length - 1 && (
                            <div className="connector-arrow hidden md:block">
                                <ArrowRight size={24} />
                            </div>
                        )}

                        {/* Mobile Connector Arrow (Vertical) */}
                        {index < steps.length - 1 && (
                            <div className="mobile-connector md:hidden">
                                <ArrowDown size={24} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
