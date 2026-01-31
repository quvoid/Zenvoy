import { MapPin, Calendar, Users, Zap, IndianRupee, Scale, Loader2 } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import './TripPlannerForm.css';

const TripPlannerForm = () => {
    const {
        tripDetails,
        setTripDetails,
        loading,
        fetchTransportOptions
    } = useTrip();

    const handleChange = (e) => {
        setTripDetails({ ...tripDetails, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e) => {
        setTripDetails({ ...tripDetails, travelers: parseInt(e.target.value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate required fields
        if (!tripDetails.origin || !tripDetails.destination || !tripDetails.startDate || !tripDetails.endDate) {
            alert('Please fill in all required fields');
            return;
        }
        // Start the wizard flow - fetch transport options
        fetchTransportOptions();

        // Scroll to transport section
        setTimeout(() => {
            const transportSection = document.getElementById('transport');
            if (transportSection) {
                transportSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    };

    return (
        <section className="trip-planner-section">
            <div className="planner-card">
                <div className="planner-header">
                    <h2>Start your journey</h2>
                </div>

                <form className="form-grid" onSubmit={handleSubmit}>
                    {/* From Input */}
                    <div className="input-group">
                        <label>From</label>
                        <div className="input-wrapper">
                            <MapPin className="input-icon" />
                            <input
                                type="text"
                                name="origin"
                                value={tripDetails.origin}
                                onChange={handleChange}
                                list="city-suggestions"
                                className="form-input"
                                placeholder="Origin City (e.g. Mumbai)"
                                required
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
                                name="destination"
                                value={tripDetails.destination}
                                onChange={handleChange}
                                list="city-suggestions"
                                className="form-input"
                                placeholder="Dream Destination"
                                required
                            />
                        </div>
                    </div>

                    <datalist id="city-suggestions">
                        <option value="Mumbai" />
                        <option value="Delhi" />
                        <option value="Bangalore" />
                        <option value="Goa" />
                        <option value="Saputara" />
                        <option value="Pune" />
                        <option value="Jaipur" />
                        <option value="Kerala" />
                        <option value="Shimla" />
                        <option value="Manali" />
                        <option value="Udaipur" />
                        <option value="Agra" />
                        <option value="Varanasi" />
                        <option value="Kolkata" />
                        <option value="Hyderabad" />
                        <option value="Chennai" />
                    </datalist>

                    {/* Start Date */}
                    <div className="input-group">
                        <label>Start Date</label>
                        <div className="input-wrapper">
                            <Calendar className="input-icon" />
                            <input
                                type="date"
                                name="startDate"
                                value={tripDetails.startDate}
                                onChange={handleChange}
                                className="form-input"
                                required
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
                                name="endDate"
                                value={tripDetails.endDate}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    {/* Travelers */}
                    <div className="input-group travelers-group">
                        <label>Travelers</label>
                        <div className="input-wrapper">
                            <Users className="input-icon" />
                            <select
                                className="form-select"
                                name="travelers"
                                value={tripDetails.travelers}
                                onChange={handleSelectChange}
                            >
                                <option value="1">1 Traveler</option>
                                <option value="2">2 Travelers</option>
                                <option value="3">3 Travelers</option>
                                <option value="4">4+ Travelers</option>
                            </select>
                        </div>
                    </div>

                    {/* Budget Input */}
                    <div className="input-group budget-group">
                        <label>Total Budget (₹)</label>
                        <div className="input-wrapper">
                            <IndianRupee className="input-icon" />
                            <input
                                type="number"
                                name="budget"
                                value={tripDetails.budget}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Ex: 20000"
                                min="0"
                            />
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="preference-group">
                        <label>Travel Preference</label>
                        <div className="radio-options">
                            <label className="radio-card">
                                <input
                                    type="radio"
                                    name="preference"
                                    value="cheapest"
                                    checked={tripDetails.preference === 'cheapest'}
                                    onChange={handleChange}
                                />
                                <div className="flex items-center gap-2">
                                    <IndianRupee size={16} />
                                    <span>Cheapest</span>
                                </div>
                            </label>

                            <label className="radio-card">
                                <input
                                    type="radio"
                                    name="preference"
                                    value="fastest"
                                    checked={tripDetails.preference === 'fastest'}
                                    onChange={handleChange}
                                />
                                <div className="flex items-center gap-2">
                                    <Zap size={16} />
                                    <span>Fastest</span>
                                </div>
                            </label>

                            <label className="radio-card">
                                <input
                                    type="radio"
                                    name="preference"
                                    value="balanced"
                                    checked={tripDetails.preference === 'balanced'}
                                    onChange={handleChange}
                                />
                                <div className="flex items-center gap-2">
                                    <Scale size={16} />
                                    <span>Balanced</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="cta-container">
                        <button className="btn-primary" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin mr-2" size={20} />
                                    Finding Options...
                                </>
                            ) : (
                                'Find Transport & Stays'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TripPlannerForm;
