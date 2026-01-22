import { useState } from 'react';
import { MapPin, Star, Wifi, Coffee, Utensils } from 'lucide-react';
import './StaySection.css';

const mockStayData = [
    {
        id: 1,
        name: 'Backpacker\'s Haven',
        image: '/hotel-boutique.png', // Using existing placeholder
        rating: 4.2,
        reviews: 350,
        location: 'Old Town District',
        amenities: ['Shared Kitchen', 'Free WiFi', 'Lounge'],
        pricePerNight: 800,
        totalPrice: 4000,
        currency: '₹'
    },
    {
        id: 2,
        name: 'Cozy City Apartment',
        image: '/hotel-luxury.png',
        rating: 4.5,
        reviews: 120,
        location: 'City Center',
        amenities: ['City View', 'Kitchen', 'WiFi', 'Washer'],
        pricePerNight: 2500,
        totalPrice: 12500,
        currency: '₹'
    },
    {
        id: 3,
        name: 'Green Valley Resort',
        image: '/hotel-resort.png',
        rating: 4.7,
        reviews: 180,
        location: 'Hill Station',
        amenities: ['Mountain View', 'Pool', 'Breakfast', 'Spa'],
        pricePerNight: 5500,
        totalPrice: 27500,
        currency: '₹'
    },
    {
        id: 4,
        name: 'Grand Luxury Suites',
        image: '/hotel-luxury.png',
        rating: 4.9,
        reviews: 89,
        location: 'Downtown City Center',
        amenities: ['Spa', 'Infinity Pool', 'Gym', 'Valet'],
        pricePerNight: 12000,
        totalPrice: 60000,
        currency: '₹'
    },
    {
        id: 5,
        name: 'Seaside Paradise',
        image: '/hotel-resort.png',
        rating: 4.8,
        reviews: 240,
        location: 'Coastal Beachfront',
        amenities: ['Private Beach', 'Bar', 'Water Sports'],
        pricePerNight: 18500,
        totalPrice: 92500,
        currency: '₹'
    },
    {
        id: 6,
        name: 'Urban Loft Stay',
        image: '/hotel-boutique.png',
        rating: 4.4,
        reviews: 410,
        location: 'Business District',
        amenities: ['Workspace', 'High-Speed WiFi', 'Cafe'],
        pricePerNight: 3200,
        totalPrice: 16000,
        currency: '₹'
    }
];

const StaySection = () => {
    const [sortBy, setSortBy] = useState('recommended');

    const getSortedStays = () => {
        let sorted = [...mockStayData];
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

    return (
        <section className="stay-section">
            <div className="stay-container">
                <div className="stay-header">
                    <h2>Choose Your Stay</h2>
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
                    {sortedStays.map((stay) => (
                        <div key={stay.id} className="stay-card">
                            <div className="stay-image-container">
                                <img src={stay.image} alt={stay.name} className="stay-image" />
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
                                            {stay.currency}{stay.pricePerNight}
                                            <span className="price-unit"> /night</span>
                                        </div>
                                        <div className="total-price">
                                            Total: {stay.currency}{stay.totalPrice}
                                        </div>
                                    </div>
                                    <button className="select-stay-btn">
                                        Select Stay
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StaySection;
