import { useState } from 'react';
import { Clock, MapPin, ChevronDown, Plus, PenLine } from 'lucide-react';
import './ItinerarySection.css';

const mockItineraryData = [
    {
        id: 1,
        day: 'Day 1',
        date: 'Oct 15, 2024',
        activities: [
            {
                id: 101,
                time: '09:00 AM',
                title: 'Arrival & Check-in',
                location: 'Grand Luxury Suites',
                notes: 'Early check-in requested.'
            },
            {
                id: 102,
                time: '11:00 AM',
                title: 'City Sightseeing Tour',
                location: 'Downtown Center',
                notes: 'Meet guide at main square.'
            },
            {
                id: 103,
                time: '07:00 PM',
                title: 'Welcome Dinner',
                location: 'Skyline Rooftop Restaurant',
                notes: 'Reservation confirmed for 2.'
            }
        ]
    },
    {
        id: 2,
        day: 'Day 2',
        date: 'Oct 16, 2024',
        activities: [
            {
                id: 201,
                time: '08:30 AM',
                title: 'Breakfast at Cafe',
                location: 'The Morning Brew',
                notes: ''
            },
            {
                id: 202,
                time: '10:00 AM',
                title: 'Museum Visit',
                location: 'National History Museum',
                notes: 'Tickets booked online.'
            }
        ]
    },
    {
        id: 3,
        day: 'Day 3',
        date: 'Oct 17, 2024',
        activities: [
            {
                id: 301,
                time: '10:00 AM',
                title: 'Beach Relaxation',
                location: 'Sunny Bay Beach',
                notes: 'Bring sunscreen and towels.'
            },
            {
                id: 302,
                time: '04:00 PM',
                title: 'Departure',
                location: 'City Airport',
                notes: 'Flight leaves at 06:30 PM.'
            }
        ]
    }
];

const ItinerarySection = ({ id }) => {
    const [expandedDay, setExpandedDay] = useState(1);

    const toggleDay = (dayId) => {
        setExpandedDay(expandedDay === dayId ? null : dayId);
    };

    return (
        <section id={id} className="itinerary-section">
            <div className="itinerary-container">
                <div className="itinerary-header">
                    <h2>Your Travel Itinerary</h2>
                </div>

                <div className="itinerary-list">
                    {mockItineraryData.map((day) => (
                        <div
                            key={day.id}
                            className={`day-card ${expandedDay === day.id ? 'expanded' : ''}`}
                        >
                            <div
                                className="day-header"
                                onClick={() => toggleDay(day.id)}
                            >
                                <div className="day-title-block">
                                    <span className="day-label">{day.day}</span>
                                    <span className="day-date">{day.date}</span>
                                </div>
                                <ChevronDown className="expand-icon" />
                            </div>

                            <div className="day-content">
                                <div className="activity-list">
                                    {day.activities.map((activity) => (
                                        <div key={activity.id} className="activity-item">
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
