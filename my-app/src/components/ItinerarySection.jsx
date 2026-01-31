import { useState } from 'react';
import { Clock, MapPin, ChevronDown, Plus, Train, Plane, Building, Loader2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import './ItinerarySection.css';

const ItinerarySection = ({ id }) => {
    const [expandedDay, setExpandedDay] = useState(1);
    const {
        itinerary,
        selectedTransport,
        selectedHotel,
        loading,
        currentStep
    } = useTrip();

    const itineraryData = itinerary?.itinerary || [];

    const toggleDay = (dayId) => {
        setExpandedDay(expandedDay === dayId ? null : dayId);
    };

    // Loading state while generating
    if (loading && currentStep === 'STAY') {
        return (
            <section id={id} className="itinerary-section">
                <div className="itinerary-container">
                    <div className="itinerary-header">
                        <h2>Creating Your Perfect Itinerary...</h2>
                    </div>
                    <div className="itinerary-loading">
                        <Loader2 className="animate-spin" size={48} />
                        <p>Personalizing your trip based on your selections...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Empty state
    if (!itinerary) {
        return (
            <section id={id} className="itinerary-section">
                <div className="itinerary-container">
                    <div className="itinerary-header">
                        <h2>Your Travel Itinerary</h2>
                        <p style={{ color: '#aaa', marginTop: '10px' }}>
                            Your personalized trip plan will appear here after you select your transport and accommodation.
                        </p>
                    </div>
                    {/* Show selection summary if available */}
                    {(selectedTransport || selectedHotel) && (
                        <div className="selection-summary">
                            {selectedTransport && (
                                <div className="summary-item">
                                    {selectedTransport.transportType === 'train' ? <Train size={18} /> : <Plane size={18} />}
                                    <span>{selectedTransport.name} - ₹{selectedTransport.price.toLocaleString()}</span>
                                </div>
                            )}
                            {selectedHotel && (
                                <div className="summary-item">
                                    <Building size={18} />
                                    <span>{selectedHotel.name} - ₹{selectedHotel.totalPrice.toLocaleString()}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section id={id} className="itinerary-section">
            <div className="itinerary-container">
                <div className="itinerary-header">
                    <h2>Your Travel Itinerary: {itinerary.destination}</h2>

                    {/* Curated Selection Summary */}
                    <div className="curated-summary">
                        {selectedTransport && (
                            <div className="curated-item transport">
                                {selectedTransport.transportType === 'train' ? <Train size={16} /> : <Plane size={16} />}
                                <span>
                                    {selectedTransport.name} • Arrives {selectedTransport.arrivalTime}
                                </span>
                            </div>
                        )}
                        {selectedHotel && (
                            <div className="curated-item hotel">
                                <Building size={16} />
                                <span>
                                    {selectedHotel.name} • {selectedHotel.location}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="itinerary-list">
                    {itineraryData.map((day) => (
                        <div
                            key={day.day}
                            className={`day-card ${expandedDay === day.day ? 'expanded' : ''}`}
                        >
                            <div
                                className="day-header"
                                onClick={() => toggleDay(day.day)}
                            >
                                <div className="day-title-block">
                                    <span className="day-label">Day {day.day}</span>
                                    <span className="day-date">{day.date}</span>
                                </div>
                                <ChevronDown className="expand-icon" />
                            </div>

                            <div className="day-content">
                                <div className="activity-list">
                                    {day.activities.map((activity, index) => (
                                        <div key={index} className="activity-item">
                                            <div className="activity-dot"></div>

                                            <div className="activity-time">
                                                <Clock size={14} />
                                                {activity.time}
                                            </div>

                                            <div className="activity-card">
                                                <h4 className="activity-title">{activity.title}</h4>

                                                <div className="activity-location">
                                                    <MapPin size={14} />
                                                    {activity.location}
                                                </div>

                                                {activity.notes && (
                                                    <div className="activity-notes">
                                                        {activity.notes}
                                                    </div>
                                                )}

                                                {activity.cost > 0 && (
                                                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#22c55e' }}>
                                                        Est. Cost: ₹{activity.cost}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="day-actions">
                                    <button className="add-activity-btn">
                                        <Plus size={18} />
                                        Add Activity
                                    </button>
                                </div>

                                <div className="notes-input-area">
                                    <textarea
                                        className="notes-textarea"
                                        placeholder="Add personal notes for this day..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItinerarySection;
