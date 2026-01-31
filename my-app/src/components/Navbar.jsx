import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    if (isAuthPage) return null; // Optional: Hide navbar on auth pages if desired, or keep it.
    // Planning to keep it but maybe simplified? For now, let's keep it standard.

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5 transition-all duration-300 hover:bg-black/30">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                                <span className="text-white font-bold text-sm">Z</span>
                            </div>
                            <span className="font-semibold text-lg tracking-wide text-white">Zenvoy</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                            <a href="/#features" className="text-gray-300 hover:text-white transition-colors hover:shadow-glow">Features</a>
                            <a href="/#destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</a>
                            <a href="/#itinerary" className="text-gray-300 hover:text-white transition-colors">Itinerary</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                                Sign In
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg hover:shadow-white/20">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
