import { Wallet, Car, Bed, Coffee, Ticket } from 'lucide-react';
import './BudgetSection.css';

const mockBudgetData = [
    {
        id: 1,
        name: 'Transport',
        cost: 1250,
        icon: <Car size={20} />
    },
    {
        id: 2,
        name: 'Accommodation',
        cost: 1600,
        icon: <Bed size={20} />
    },
    {
        id: 3,
        name: 'Food & Dining',
        cost: 450,
        icon: <Coffee size={20} />
    },
    {
        id: 4,
        name: 'Activities',
        cost: 200,
        icon: <Ticket size={20} />
    }
];

const BudgetSection = () => {
    const totalCost = mockBudgetData.reduce((acc, item) => acc + item.cost, 0);

    return (
        <aside className="budget-section">
            <div className="budget-card">
                <div className="budget-header">
                    <h2>Trip Budget Summary</h2>
                </div>

                <div className="budget-list">
                    {mockBudgetData.map((item) => (
                        <div key={item.id} className="budget-item">
                            <div className="item-name">
                                <span className="budget-icon">{item.icon}</span>
                                {item.name}
                            </div>
                            <div className="item-cost">
                                ${item.cost}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="budget-total">
                    <span className="total-label">Total Estimated</span>
                    <span className="total-amount">${totalCost}</span>
                </div>
            </div>
        </aside>
    );
};

export default BudgetSection;
