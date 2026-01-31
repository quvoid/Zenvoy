import React, { useEffect } from 'react';
import VideoHero from '../components/VideoHero';
import HowItWorks from '../components/HowItWorks';
import WhyTripPlanner from '../components/WhyTripPlanner';
import Testimonials from '../components/Testimonials';
import CTABridge from '../components/CTABridge';
import TransportSection from '../components/TransportSection';
import StaySection from '../components/StaySection';
import ItinerarySection from '../components/ItinerarySection';
import BudgetSection from '../components/BudgetSection';
import BestTimeSection from '../components/BestTimeSection';
// import MapSection from '../components/MapSection';
import ShareSection from '../components/ShareSection';
import ContactSupport from '../components/ContactSupport';
import LegalTrustBar from '../components/LegalTrustBar';
import Footer from '../components/Footer';
import TripPlannerForm from '../components/TripPlannerForm';
import { TripProvider } from '../context/TripContext';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle hash scrolling
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <TripProvider>
            <div className="min-h-screen bg-black text-white">
                {/* Hero Section with Video Background */}
                <VideoHero />

                {/* How It Works Section */}
                <HowItWorks id="features" />

                {/* Why TripPlanner Section */}
                <WhyTripPlanner />

                {/* Testimonials Section */}
                <Testimonials />

                {/* CTA Bridge Section */}
                <CTABridge />

                {/* Trip Planning Form Section */}
                <TripPlannerForm />

                {/* Transport Options Section */}
                <TransportSection />

                {/* Stay Selection Section */}
                <StaySection />

                {/* Split Layout: Itinerary & Budget */}
                <div className="planner-layout">
                    <ItinerarySection id="itinerary" />
                    <BudgetSection />
                </div>

                {/* Best Time to Travel Section */}
                <BestTimeSection />

                {/* Map Preview Section - Disabled for now */}
                {/* <MapSection id="destinations" /> */}

                {/* Save & Share Section */}
                <ShareSection />

                {/* Final Sections */}
                <ContactSupport />
                <LegalTrustBar />
                <Footer />
            </div>
        </TripProvider>
    );
};

export default HomePage;
