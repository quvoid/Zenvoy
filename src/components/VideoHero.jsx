import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

const VideoHero = () => {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Play video when loaded
        const handleLoadedData = () => {
            setIsLoaded(true);
            video.play().catch(err => console.log('Video autoplay prevented:', err));
        };

        // Pause video when tab is not visible (performance optimization)
        const handleVisibilityChange = () => {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch(err => console.log('Video play prevented:', err));
            }
        };

        video.addEventListener('loadeddata', handleLoadedData);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src="/travelvideo-loop.webm" type="video/webm" />
                    <source src="/travelvideo-loop.mp4" type="video/mp4" />
                </video>

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                {/* Fallback Gradient (shown while video loads) */}
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 animate-pulse" />
                )}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-white mb-8 animate-fade-in"
                    style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
                >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="font-medium">AI-Powered Trip Planning</span>
                </div>

                {/* Main Heading */}
                <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white animate-fade-in-up"
                    style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
                >
                    Plan Your Perfect
                    <br />
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Journey
                    </span>
                </h1>

                {/* Subheading */}
                <p
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
                >
                    Create stunning itineraries with AI-powered recommendations.
                    <br />
                    Discover hidden gems, optimize routes, and make every moment count.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
                >
                    <button className="group px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-2xl hover:shadow-white/20 hover:scale-105 flex items-center gap-2">
                        <MapPin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Start Planning
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        View Demo
                    </button>
                </div>

                {/* Stats */}
                <div
                    className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in"
                    style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
                        <div className="text-sm text-gray-300">Trips Planned</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
                        <div className="text-sm text-gray-300">Destinations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9★</div>
                        <div className="text-sm text-gray-300">User Rating</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll" />
                </div>
            </div>
        </div>
    );
};

export default VideoHero;
