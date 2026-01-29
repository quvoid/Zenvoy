import { Download, ChevronRight } from "lucide-react";
import './App.css';
import VideoHero from './components/VideoHero';
import HowItWorks from './components/HowItWorks';
import WhyTripPlanner from './components/WhyTripPlanner';
import Testimonials from './components/Testimonials';
import CTABridge from './components/CTABridge';
import TransportSection from './components/TransportSection';
import StaySection from './components/StaySection';
import ItinerarySection from './components/ItinerarySection';
import BudgetSection from './components/BudgetSection';
import BestTimeSection from './components/BestTimeSection';
import MapSection from './components/MapSection';
import ShareSection from './components/ShareSection';
import ContactSupport from './components/ContactSupport';
import LegalTrustBar from './components/LegalTrustBar';
import Footer from './components/Footer';
import TripPlannerForm from './components/TripPlannerForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 transition-all duration-300 hover:bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="font-semibold text-lg tracking-wide">Zenvoy</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors hover:shadow-glow">Features</a>
                <a href="#destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</a>
                <a href="#itinerary" className="text-gray-300 hover:text-white transition-colors">Itinerary</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg hover:shadow-white/20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Map Preview Section */}
      <MapSection id="destinations" />

      {/* Save & Share Section */}
      <ShareSection />

      {/* Final Sections */}
      <ContactSupport />
      <LegalTrustBar />
      <Footer />
    </div>
  );
}

export default App;

