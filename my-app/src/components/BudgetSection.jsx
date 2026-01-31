import { Car, Bed, Coffee, Ticket } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import './BudgetSection.css';

const BudgetSection = () => {
    const { selectedTransport, selectedHotel, calculateNights } = useTrip();

    // Calculate real costs from selections
    const transportCost = selectedTransport?.price || 0;
    const accommodationCost = selectedHotel?.totalPrice || 0;

    // Estimate food and activities based on nights
    const nights = calculateNights ? calculateNights() : 3;
    const foodCost = nights * 800; // ₹800 per day for food
    const activitiesCost = nights * 500; // ₹500 per day for activities

    const budgetData = [
        {
            id: 1,
            name: 'Transport',
            cost: transportCost,
            icon: <Car size={20} />
        },
        {
            id: 2,
            name: 'Accommodation',
            cost: accommodationCost,
            icon: <Bed size={20} />
        },
        {
            id: 3,
            name: 'Food & Dining',
            cost: foodCost,
            icon: <Coffee size={20} />
        },
        {
            id: 4,
            name: 'Activities',
            cost: activitiesCost,
            icon: <Ticket size={20} />
        }
    ];

    const totalCost = budgetData.reduce((acc, item) => acc + item.cost, 0);

    return (
        <aside className="budget-section">
            <div className="budget-card">
                <div className="budget-header">
                    <h2>Trip Budget Summary</h2>
                </div>

                <div className="budget-list">
                    {budgetData.map((item) => (
                        <div key={item.id} className="budget-item">
                            <div className="item-name">
                                <span className="budget-icon">{item.icon}</span>
                                {item.name}
                            </div>
                            <div className="item-cost">
                                ₹{item.cost.toLocaleString('en-IN')}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="budget-total">
                    <span className="total-label">Total Estimated</span>
                    <span className="total-amount">₹{totalCost.toLocaleString('en-IN')}</span>
                </div>
            </div>
        </aside>
    );
};

export default BudgetSection;
