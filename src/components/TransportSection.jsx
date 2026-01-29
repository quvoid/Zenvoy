import { useState } from 'react';
import { Train, Plane } from 'lucide-react';
import './TransportSection.css';

// Mock transport data
const mockTransportData = {
    trains: [
        {
            id: 1,
            name: 'Rajdhani Express',
            type: 'AC 2-Tier',
            departure: '06:00',
            arrival: '14:30',
            duration: '8h 30m',
            stops: 2,
            price: 1250,
            isCheapest: false
        },
        {
            id: 2,
            name: 'Shatabdi Express',
            type: 'AC Chair Car',
            departure: '08:15',
            arrival: '15:45',
            duration: '7h 30m',
            stops: 1,
            price: 980,
            isCheapest: true
        },
        {
            id: 3,
            name: 'Duronto Express',
            type: 'AC 3-Tier',
            departure: '11:30',
            arrival: '19:00',
            duration: '7h 30m',
            stops: 0,
            price: 1100,
            isCheapest: false
        }
    ],
    flights: [
        {
            id: 1,
            name: 'IndiGo 6E-2341',
            type: 'Economy',
            departure: '07:00',
            arrival: '09:30',
            duration: '2h 30m',
            stops: 0,
            price: 4500,
            isCheapest: false
        },
        {
            id: 2,
            name: 'Air India AI-662',
            type: 'Economy',
            departure: '10:15',
            arrival: '12:50',
            duration: '2h 35m',
            stops: 0,
            price: 3800,
            isCheapest: true
        },
        {
            id: 3,
            name: 'SpiceJet SG-8156',
            type: 'Economy',
            departure: '14:30',
            arrival: '17:15',
            duration: '2h 45m',
            stops: 1,
            price: 4200,
            isCheapest: false
        }
    ]
};

const TransportSection = () => {
    const [activeTab, setActiveTab] = useState('trains');

    const currentData = activeTab === 'trains' ? mockTransportData.trains : mockTransportData.flights;

    return (
        <section className="transport-section">
            <div className="transport-container">
                {/* Section Header */}
                <div className="transport-header">
                    <h2>Select Your Transport Option</h2>
                </div>

                {/* Tabs */}
                <div className="transport-tabs">
                    <button
                        className={`tab-button ${activeTab === 'trains' ? 'active' : ''}`}
                        onClick={() => setActiveTab('trains')}
                    >
                        <Train size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                        Trains
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'flights' ? 'active' : ''}`}
                        onClick={() => setActiveTab('flights')}
                    >
                        <Plane size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                        Flights
                    </button>
                </div>

                {/* Transport List */}
                <div className="transport-list">
                    {currentData.map((transport) => (
                        <div
                            key={transport.id}
                            className={`transport-card ${transport.isCheapest ? 'cheapest' : ''}`}
                        >
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
                                        <div className="time">{transport.departure}</div>
                                        <div className="time-label">Departure</div>
                                    </div>

                                    <div className="time-separator">
                                        <div className="duration-line"></div>
                                        <div className="duration-text">{transport.duration}</div>
                                    </div>

                                    <div className="time-block">
                                        <div className="time">{transport.arrival}</div>
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
                                <div className="transport-price">₹{transport.price}</div>
                                <button className="select-button">Select</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransportSection;
