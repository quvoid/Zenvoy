import { useState } from 'react';
import { Train, Plane, Loader2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import './TransportSection.css';

const TransportSection = () => {
    const [activeTab, setActiveTab] = useState('trains');
    const {
        currentStep,
        transportOptions,
        selectedTransport,
        selectTransport,
        loading
    } = useTrip();

    // Only show real options if we have them, otherwise show placeholder
    const hasOptions = transportOptions.trains.length > 0 || transportOptions.flights.length > 0;
    const currentData = activeTab === 'trains' ? transportOptions.trains : transportOptions.flights;

    // If not in transport selection step and no selection made, show placeholder
    if (currentStep === 'SEARCH' && !selectedTransport) {
        return (
            <section className="transport-section" id="transport">
                <div className="transport-container">
                    <div className="transport-header">
                        <h2>Select Your Transport Option</h2>
                        <p className="transport-subtitle">
                            Fill in your trip details above and click "Find Transport & Stays" to see available options.
                        </p>
                    </div>
                    <div className="transport-placeholder">
                        <Train size={48} className="placeholder-icon" />
                        <p>Transport options will appear here once you search</p>
                    </div>
                </div>
            </section>
        );
    }

    // Loading state
    if (loading && currentStep === 'SEARCH') {
        return (
            <section className="transport-section" id="transport">
                <div className="transport-container">
                    <div className="transport-header">
                        <h2>Finding Best Transport Options...</h2>
                    </div>
                    <div className="transport-loading">
                        <Loader2 className="animate-spin" size={48} />
                        <p>Searching for trains and flights...</p>
                    </div>
                </div>
            </section>
        );
    }

    const handleSelect = (transport, type) => {
        selectTransport({ ...transport, transportType: type });
    };

    return (
        <section className="transport-section" id="transport">
            <div className="transport-container">
                {/* Section Header */}
                <div className="transport-header">
                    <h2>Select Your Transport Option</h2>
                    {selectedTransport && (
                        <div className="selected-badge">
                            ✓ Selected: {selectedTransport.name} - ₹{selectedTransport.price}
                        </div>
                    )}
                </div>

                {/* Tabs */}
                <div className="transport-tabs">
                    <button
                        className={`tab-button ${activeTab === 'trains' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trains')}
                    >
                        <Train size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                        Trains ({transportOptions.trains.length})
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'flights' ? 'active' : ''}`}
                        onClick={() => setActiveTab('flights')}
                    >
                        <Plane size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                        Flights ({transportOptions.flights.length})
                    </button>
                </div>

                {/* Transport List */}
                <div className="transport-list">
                    {currentData.length === 0 ? (
                        <div className="no-options">
                            <p>No {activeTab} available for this route. Try the other tab or a different route.</p>
                        </div>
                    ) : (
                        currentData.map((transport) => (
                            <div
                                key={transport.id}
                                className={`transport-card ${transport.tag === 'BEST PRICE' ? 'cheapest' : ''} ${selectedTransport?.id === transport.id ? 'selected' : ''}`}
                            >
                                {/* Tag Badge */}
                                {transport.tag && (
                                    <div className={`transport-tag ${transport.tag.toLowerCase().replace(' ', '-')}`}>
                                        {transport.tag}
                                    </div>
                                )}

                                {/* Transport Info Grid */}
                                <div className="transport-info">
                                    {/* Name */}
                                    <div className="transport-name-block">
                                        <div className="transport-name">{transport.name}</div>
                                        <div className="transport-type">{transport.type}</div>
                                    </div>

                                    {/* Times */}
                                    <div className="transport-times">
                                        <div className="time-block">
                                            <div className="time">{transport.departureTime}</div>
                                            <div className="time-label">Departure</div>
                                        </div>

                                        <div className="time-separator">
                                            <div className="duration-line"></div>
                                            <div className="duration-text">{transport.duration}</div>
                                        </div>

                                        <div className="time-block">
                                            <div className="time">{transport.arrivalTime}</div>
                                            <div className="time-label">Arrival</div>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="transport-details">
                                        <div className="detail-item">
                                            <div className="detail-value">{transport.stops}</div>
                                            <div className="detail-label">Stops</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Price and Action */}
                                <div className="transport-action">
                                    <div className="transport-price">₹{transport.price.toLocaleString()}</div>
                                    <button
                                        className={`select-button ${selectedTransport?.id === transport.id ? 'selected' : ''}`}
                                        onClick={() => handleSelect(transport, activeTab === 'trains' ? 'train' : 'flight')}
                                        disabled={loading}
                                    >
                                        {selectedTransport?.id === transport.id ? 'Selected ✓' : 'Select'}
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default TransportSection;
