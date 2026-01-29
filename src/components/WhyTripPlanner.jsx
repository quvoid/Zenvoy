import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sparkles, Home, DollarSign, Clock } from 'lucide-react';
import './WhyTripPlanner.css';

const features = [
    {
        icon: Sparkles,
        title: 'AI-Powered Routes',
        description: 'Smart algorithms find the best connections and optimal travel paths for your journey.',
        id: 1
    },
    {
        icon: Home,
        title: 'Smart Stay Plans',
        description: 'Curated accommodation suggestions that match your budget and preferences perfectly.',
        id: 2
    },
    {
        icon: DollarSign,
        title: 'Budget Control',
        description: 'Track expenses in real-time and get alerts when you\'re approaching your limits.',
        id: 3
    },
    {
        icon: Clock,
        title: 'Best Time to Travel',
        description: 'Data-driven insights on weather, crowds, and pricing to help you pick the perfect dates.',
        id: 4
    }
];

const WhyTripPlanner = () => {
    const containerRef = useRef(null);
    const [activeFeature, setActiveFeature] = useState(0);

    // Increase offset for smoother transition trigger
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // More robust mapping to ensure all items get equal time
            // Use 4 zones: 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1.0
            const step = 1 / features.length;
            const rawIndex = Math.floor(latest / step);
            // Clamp strictly between 0 and length-1
            const index = Math.max(0, Math.min(rawIndex, features.length - 1));

            setActiveFeature(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="why-scroll-container">
            <div className="sticky-wrapper">
                {/* Video Background */}
                <div className="video-background">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="bg-video"
                    >
                        <source src="/travelvid2.mp4" type="video/mp4" />
                    </video>
                    <div className="video-overlay" />
                </div>

                <div className="content-overlay">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-header"
                    >
                        <h2>Why Zenvoy?</h2>
                        <p>Smarter planning. Better journeys.</p>
                    </motion.div>

                    <div className="feature-display">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const isActive = index === activeFeature;
                            return (
                                <div
                                    key={feature.id}
                                    className={`feature-card-item ${isActive ? 'active' : ''}`}
                                >
                                    <div className="icon-wrapper">
                                        <Icon size={64} strokeWidth={1.5} color="white" />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Progress Indicators */}
                    <div className="progress-dots">
                        {features.map((_, idx) => (
                            <div
                                key={idx}
                                className={`dot ${idx === activeFeature ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyTripPlanner;
