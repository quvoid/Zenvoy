import { useState } from 'react';
import { MapPin, Navigation, Building, Ticket, Plus, Minus, Train, Plane, Hotel } from 'lucide-react';
import './MapSection.css';

const MapSection = ({ id }) => {
    const [activeLayers, setActiveLayers] = useState(['route', 'hotels']);

    const toggleLayer = (layer) => {
        setActiveLayers(prev =>
            prev.includes(layer)
                ? prev.filter(l => l !== layer)
                : [...prev, layer]
        );
    };

    return (
        <section id={id} className="map-section">
            <div className="map-container">
                <div className="map-header">
                    <h2>Trip Route Visualization</h2>
                </div>

                <div className="map-layout">
                    {/* Visual Map Panel */}
                    <div className="map-visual-panel">
                        {/* Dark grid background provided by CSS */}

                        {/* SVG Route Overlay */}
                        <svg className="route-svg">
                            <defs>
                                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                            </defs>
                            {/* Curved path connecting pins - simulated coordinates */}
                            <path
                                d="M150,350 Q300,450 450,250 T750,150"
                                className="route-path"
                            />
                        </svg>

                        {/* Simulated Pins (using absolute positioning to match SVG coordinates) */}
                        <div className="map-marker" style={{ left: '150px', top: '350px' }}>
                            <div className="pin-icon source">
                                <Navigation size={20} />
                            </div>
                            <span className="marker-label">Start: City A</span>
                        </div>

                        {/* Intermediate Stop */}
                        <div className="map-marker" style={{ left: '450px', top: '250px' }}>
                            <div className="pin-icon hotel">
                                <Hotel size={20} />
                            </div>
                            <span className="marker-label">Grand Luxury Suites</span>
                        </div>

                        <div className="map-marker" style={{ left: '750px', top: '150px' }}>
                            <div className="pin-icon dest">
                                <MapPin size={20} />
                            </div>
                            <span className="marker-label">Dest: Resort</span>
                        </div>

                        {/* Attraction Pin - Offset */}
                        <div className="map-marker" style={{ left: '550px', top: '300px' }}>
                            <div className="pin-icon attraction">
                                <Ticket size={18} />
                            </div>
                            <span className="marker-label">Theme Park</span>
                        </div>

                        {/* Zoom Controls */}
                        <div className="map-controls">
                            <button className="zoom-btn"><Plus size={20} /></button>
                            <button className="zoom-btn"><Minus size={20} /></button>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="map-details-panel">
                        <div className="route-summary">
                            <h3>Route Details</h3>
                            <div className="summary-stats">
                                <div className="stat-box">
                                    <label>Total Distance</label>
                                    <span>1,240 km</span>
                                </div>
                                <div className="stat-box">
                                    <label>Est. Time</label>
                                    <span>14h 30m</span>
                                </div>
                            </div>
                        </div>

                        <div className="map-layers">
                            <h4>Visible Layers</h4>
                            <div className="layer-toggles">
                                <button
                                    className={`layer-btn ${activeLayers.includes('route') ? 'active' : ''}`}
                                    onClick={() => toggleLayer('route')}
                                >
                                    <Train size={16} /> Transport
                                </button>
                                <button
                                    className={`layer-btn ${activeLayers.includes('hotels') ? 'active' : ''}`}
                                    onClick={() => toggleLayer('hotels')}
                                >
                                    <Building size={16} /> Hotels
                                </button>
                                <button
                                    className={`layer-btn ${activeLayers.includes('attractions') ? 'active' : ''}`}
                                    onClick={() => toggleLayer('attractions')}
                                >
                                    <Ticket size={16} /> Attractions
                                </button>
                            </div>
                        </div>

                        <div className="route-summary">
                            <h3>Highlights</h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#a3a3a3', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }}></span>
                                    Departure from Central Station
                                </li>
                                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7' }}></span>
                                    Stay at Grand Luxury Suites
                                </li>
                                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>
                                    Visit Adventure Theme Park
                                </li>
                                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ec4899' }}></span>
                                    Arrival at Coastal Resort
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
