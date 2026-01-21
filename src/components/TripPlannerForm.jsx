import { MapPin, Calendar, Users, Zap, DollarSign, Scale } from 'lucide-react';
import './TripPlannerForm.css';

const TripPlannerForm = () => {
    return (
        <section className="trip-planner-section">
            <div className="planner-card">
                <div className="planner-header">
                    <h2>Where to next?</h2>
                </div>

                <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
                    {/* From Input */}
                    <div className="input-group">
                        <label>From</label>
                        <div className="input-wrapper">
                            <MapPin className="input-icon" />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Origin City (e.g. New York)"
                            />
                        </div>
                    </div>

                    {/* To Input */}
                    <div className="input-group">
                        <label>To</label>
                        <div className="input-wrapper">
                            <MapPin className="input-icon" />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Dream Destination"
                            />
                        </div>
                    </div>

                    {/* Start Date */}
                    <div className="input-group">
                        <label>Start Date</label>
                        <div className="input-wrapper">
                            <Calendar className="input-icon" />
                            <input
                                type="date"
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* End Date */}
                    <div className="input-group">
                        <label>End Date</label>
                        <div className="input-wrapper">
                            <Calendar className="input-icon" />
                            <input
                                type="date"
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* Travelers */}
                    <div className="input-group travelers-group">
                        <label>Travelers</label>
                        <div className="input-wrapper">
                            <Users className="input-icon" />
                            <select className="form-select">
                                <option value="1">1 Traveler</option>
                                <option value="2">2 Travelers</option>
                                <option value="3">3 Travelers</option>
                                <option value="4">4+ Travelers</option>
                            </select>
                        </div>
                    </div>

                    {/* Empty div to balance grid if needed, or span travelers fill? 
               Let's leave travelers 1 col, and preferences will take new row full width.
           */}

                    {/* Preferences */}
                    <div className="preference-group">
                        <label>Travel Preference</label>
                        <div className="radio-options">
                            <label className="radio-card">
                                <input type="radio" name="preference" value="cheapest" />
                                <div className="flex items-center gap-2">
                                    <DollarSign size={16} />
                                    <span>Cheapest</span>
                                </div>
                            </label>

                            <label className="radio-card">
                                <input type="radio" name="preference" value="fastest" />
                                <div className="flex items-center gap-2">
                                    <Zap size={16} />
                                    <span>Fastest</span>
                                </div>
                            </label>

                            <label className="radio-card">
                                <input type="radio" name="preference" value="balanced" defaultChecked />
                                <div className="flex items-center gap-2">
                                    <Scale size={16} />
                                    <span>Balanced</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </form>

                <div className="cta-container">
                    <button className="btn-primary">
                        Plan My Trip
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TripPlannerForm;
