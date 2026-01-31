import { Sun, CloudRain, Thermometer, Users, DollarSign, Info } from 'lucide-react';
import './BestTimeSection.css';

const seasonalData = [
    {
        id: 1,
        name: 'Peak Season',
        months: 'March - May',
        type: 'peak',
        weather: 'Sunny & Clear',
        temp: '20°C - 28°C',
        crowd: 'High',
        price: 'High',
        tip: 'Book 3 months in advance for best rates.'
    },
    {
        id: 2,
        name: 'Shoulder Season',
        months: 'Sept - Nov',
        type: 'moderate',
        weather: 'Mild Breeze',
        temp: '15°C - 23°C',
        crowd: 'Medium',
        price: 'Moderate',
        tip: 'Great balance of weather and price.'
    },
    {
        id: 3,
        name: 'Off-Peak',
        months: 'Dec - Feb',
        type: 'budget',
        weather: 'Cool / Rainy',
        temp: '8°C - 15°C',
        crowd: 'Low',
        price: 'Low',
        tip: 'Perfect for budget travelers and solitude.'
    }
];

const monthlyData = [
    { name: 'Jan', rating: 'mixed' },
    { name: 'Feb', rating: 'mixed' },
    { name: 'Mar', rating: 'good' },
    { name: 'Apr', rating: 'best' },
    { name: 'May', rating: 'best' },
    { name: 'Jun', rating: 'good' },
    { name: 'Jul', rating: 'mixed' }, // rains maybe
    { name: 'Aug', rating: 'mixed' },
    { name: 'Sep', rating: 'good' },
    { name: 'Oct', rating: 'good' },
    { name: 'Nov', rating: 'mixed' },
    { name: 'Dec', rating: 'mixed' },
];

const BestTimeSection = () => {
    return (
        <section className="best-time-section">
            <div className="best-time-container">

                {/* Header */}
                <div className="best-time-header">
                    <h2>Best Time to Travel</h2>
                </div>

                {/* Season Cards */}
                <div className="season-grid">
                    {seasonalData.map((season) => (
                        <div key={season.id} className="season-card">
                            <span className={`season-badge ${season.type}`}>
                                {season.type === 'peak' && 'Customer Favorite'}
                                {season.type === 'moderate' && 'Best Value'}
                                {season.type === 'budget' && 'Budget Friendly'}
                            </span>

                            <h3 className="season-name">{season.name}</h3>
                            <span className="season-months">{season.months}</span>

                            <div className="season-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Weather</span>
                                    <div className="stat-value">
                                        <Sun size={10} className="text-yellow-400" /> {/* Using explicit colors or rely on parent */}
                                        {season.weather}
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Temperature</span>
                                    <div className="stat-value">
                                        <Thermometer size={16} />
                                        {season.temp}
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Crowds</span>
                                    <div className="stat-value">
                                        <Users size={16} />
                                        {season.crowd}
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Prices</span>
                                    <div className="stat-value">
                                        <DollarSign size={16} />
                                        {season.price}
                                    </div>
                                </div>
                            </div>

                            <div className="travel-tip">
                                <Info size={16} />
                                <span>{season.tip}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Monthly Timeline */}
                <div className="monthly-timeline-container">
                    <h3 className="timeline-header">Yearly Overview</h3>
                    <div className="months-grid">
                        {monthlyData.map((month, index) => (
                            <div key={index} className={`month-item ${month.rating}`}>
                                <div className="month-bar">
                                    <div className="month-bar-fill"></div>
                                </div>
                                <span className="month-label">{month.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BestTimeSection;
