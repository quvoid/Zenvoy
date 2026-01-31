import React from 'react';
import Map from 'mapmyindia-react';
import './MapSection.css';

const MapSection = ({ id }) => {
    // Coordinates for India (default center)
    // In a real app, these would update based on the destination from the AI response
    const defaultProps = {
        center: [20.5937, 78.9629],
        zoom: 5
    };

    return (
        <section id={id} className="map-section">
            <div className="map-container">
                <div className="map-header">
                    <h2>Explore Your Destination</h2>
                    <p>Interactive map powered by Mappls</p>
                </div>

                <div className="map-layout">
                    {/* Visual Map Panel - Now using Mappls */}
                    <div className="map-visual-panel" style={{ overflow: 'hidden', position: 'relative' }}>
                        {/* 
                           MapmyIndia React Component 
                           Using Key: epfyfxphmrhkfofmwievgbqqkwdqlyfgrpeyit
                         */}
                        <Map
                            mapKey="epfyfxphmrhkfofmwievgbqqkwdqlyfgrpeyit"
                            width="100%"
                            height="100%"
                            center={defaultProps.center}
                            zoom={defaultProps.zoom}
                            search={false}
                        />
                    </div>

                    {/* Info Panel - Keeping minimal for now or dynamic later */}
                    <div className="map-details-panel">
                        <div className="route-summary">
                            <h3>Map Controls</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Use the interactive map to explore the area.
                                Markers will appear for your generated itinerary locations.
                            </p>

                            <div className="map-layers">
                                <h4>Layers</h4>
                                <div className="layer-toggles">
                                    <button className="layer-btn active">Default</button>
                                    <button className="layer-btn">Satellite</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
