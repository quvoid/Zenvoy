import { MapPin, Star, Wifi, Coffee, Utensils } from 'lucide-react';
import './StaySection.css';

const mockStayData = [
    {
        id: 1,
        name: 'Grand Luxury Suites',
        image: '/hotel-luxury.png',
        rating: 4.9,
        reviews: 128,
        location: 'Downtown City Center',
        amenities: ['Free WiFi', 'Spa', 'Pool', 'Gym'],
        pricePerNight: 250,
        totalPrice: 1250,
        currency: '$'
    },
    {
        id: 2,
        name: 'Oceanview Resort',
        image: '/hotel-resort.png',
        rating: 4.8,
        reviews: 85,
        location: 'Coastal Beachfront',
        amenities: ['Ocean View', 'Private Beach', 'Bar', 'Breakfast'],
        pricePerNight: 320,
        totalPrice: 1600,
        currency: '$'
    },
    {
        id: 3,
        name: 'Boutique Loft',
        image: '/hotel-boutique.png',
        rating: 4.7,
        reviews: 210,
        location: 'Historic District',
        amenities: ['City View', 'Kitchen', 'Workspace', 'Pet Friendly'],
        pricePerNight: 180,
        totalPrice: 900,
        currency: '$'
    }
];

const StaySection = () => {
    return (
        <section className="stay-section">
            <div className="stay-container">
                <div className="stay-header">
                    <h2>Choose Your Stay</h2>
                </div>

                <div className="stay-grid">
                    {mockStayData.map((stay) => (
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
