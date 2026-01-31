import { useState } from 'react';
import { MapPin, Star, Loader2, Building } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import './StaySection.css';

// Placeholder images based on hotel type
const getHotelImage = (imageType) => {
    const images = {
        budget: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop',
        comfort: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        luxury: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    };
    return images[imageType] || images.comfort;
};

const StaySection = () => {
    const [sortBy, setSortBy] = useState('recommended');
    const {
        currentStep,
        hotelOptions,
        selectedHotel,
        selectHotel,
        selectedTransport,
        loading
    } = useTrip();

    // If transport not selected yet, show waiting state
    if (!selectedTransport) {
        return (
            <section className="stay-section" id="stay">
                <div className="stay-container">
                    <div className="stay-header">
                        <h2>Choose Your Stay</h2>
                        <p className="stay-subtitle">
                            Select your transport option first to see available accommodations.
                        </p>
                    </div>
                    <div className="stay-placeholder">
                        <Building size={48} className="placeholder-icon" />
                        <p>Hotel options will appear after you select your transport</p>
                    </div>
                </div>
            </section>
        );
    }

    // Loading state
    if (loading && currentStep === 'TRANSPORT') {
        return (
            <section className="stay-section" id="stay">
                <div className="stay-container">
                    <div className="stay-header">
                        <h2>Finding Best Accommodations...</h2>
                    </div>
                    <div className="stay-loading">
                        <Loader2 className="animate-spin" size={48} />
                        <p>Searching for hotels and stays...</p>
                    </div>
                </div>
            </section>
        );
    }

    const getSortedStays = () => {
        if (!hotelOptions || hotelOptions.length === 0) return [];
        let sorted = [...hotelOptions];
        switch (sortBy) {
            case 'cheapest':
                return sorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
            case 'rated':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'reviews':
                return sorted.sort((a, b) => b.reviews - a.reviews);
            default:
                return sorted;
        }
    };

    const sortedStays = getSortedStays();

    const handleSelect = (hotel) => {
        selectHotel(hotel);
        // Scroll to itinerary section
        setTimeout(() => {
            const itinerarySection = document.getElementById('itinerary');
            if (itinerarySection) {
                itinerarySection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    };

    return (
        <section className="stay-section" id="stay">
            <div className="stay-container">
                <div className="stay-header">
                    <h2>Choose Your Stay</h2>
                    {selectedHotel && (
                        <div className="selected-badge">
                            ✓ Selected: {selectedHotel.name} - ₹{selectedHotel.totalPrice.toLocaleString()} total
                        </div>
                    )}
                    <div className="stay-filters">
                        <button
                            className={`filter-btn ${sortBy === 'cheapest' ? 'active' : ''}`}
                            onClick={() => setSortBy('cheapest')}
                        >
                            Cheapest
                        </button>
                        <button
                            className={`filter-btn ${sortBy === 'rated' ? 'active' : ''}`}
                            onClick={() => setSortBy('rated')}
                        >
                            Highest Rated
                        </button>
                        <button
                            className={`filter-btn ${sortBy === 'reviews' ? 'active' : ''}`}
                            onClick={() => setSortBy('reviews')}
                        >
                            Most Reviewed
                        </button>
                    </div>
                </div>

                <div className="stay-grid">
                    {sortedStays.length === 0 ? (
                        <div className="no-options">
                            <p>No hotels available. Please try a different destination.</p>
                        </div>
                    ) : (
                        sortedStays.map((stay) => (
                            <div
                                key={stay.id}
                                className={`stay-card ${selectedHotel?.id === stay.id ? 'selected' : ''}`}
                            >
                                {/* Tag Badge */}
                                {stay.tag && (
                                    <div className={`stay-tag ${stay.tag.toLowerCase().replace(' ', '-')}`}>
                                        {stay.tag}
                                    </div>
                                )}

                                <div className="stay-image-container">
                                    <img
                                        src={getHotelImage(stay.image)}
                                        alt={stay.name}
                                        className="stay-image"
                                    />
                                </div>

                                <div className="stay-content">
                                    <div className="stay-header-row">
                                        <h3 className="stay-name">{stay.name}</h3>
                                        <div className="stay-rating">
                                            <Star size={14} fill="#fbbf24" stroke="none" />
                                            <span>{stay.rating}</span>
                                        </div>
                                    </div>

                                    <div className="stay-location">
                                        <MapPin size={14} />
                                        <span>{stay.location}</span>
                                    </div>

                                    <div className="stay-amenities">
                                        {stay.amenities.slice(0, 3).map((amenity, index) => (
                                            <span key={index} className="amenity-tag">{amenity}</span>
                                        ))}
                                        {stay.amenities.length > 3 && (
                                            <span className="amenity-tag">+{stay.amenities.length - 3}</span>
                                        )}
                                    </div>

                                    <div className="stay-footer">
                                        <div className="stay-price-block">
                                            <div className="price-per-night">
                                                ₹{stay.pricePerNight.toLocaleString()}
                                                <span className="price-unit"> /night</span>
                                            </div>
                                            <div className="total-price">
                                                Total: ₹{stay.totalPrice.toLocaleString()}
                                            </div>
                                        </div>
                                        <button
                                            className={`select-stay-btn ${selectedHotel?.id === stay.id ? 'selected' : ''}`}
                                            onClick={() => handleSelect(stay)}
                                            disabled={loading}
                                        >
                                            {selectedHotel?.id === stay.id ? 'Selected ✓' : 'Select Stay'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default StaySection;
