import { Download, ChevronRight } from "lucide-react";
import './App.css';
import VideoHero from './components/VideoHero';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-semibold text-lg">TripPlanner</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Store</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Teams</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <VideoHero />
    </div>
  );
}

export default App;

