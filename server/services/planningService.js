/**
 * Planning Service - Generates realistic transport and hotel options
 * Uses smart logic + estimation (no real API needed)
 */

// Indian city coordinates for distance calculation
const cityCoordinates = {
    'mumbai': { lat: 19.0760, lon: 72.8777 },
    'delhi': { lat: 28.7041, lon: 77.1025 },
    'bangalore': { lat: 12.9716, lon: 77.5946 },
    'chennai': { lat: 13.0827, lon: 80.2707 },
    'kolkata': { lat: 22.5726, lon: 88.3639 },
    'hyderabad': { lat: 17.3850, lon: 78.4867 },
    'pune': { lat: 18.5204, lon: 73.8567 },
    'ahmedabad': { lat: 23.0225, lon: 72.5714 },
    'jaipur': { lat: 26.9124, lon: 75.7873 },
    'lucknow': { lat: 26.8467, lon: 80.9462 },
    'goa': { lat: 15.2993, lon: 74.1240 },
    'manali': { lat: 32.2396, lon: 77.1887 },
    'shimla': { lat: 31.1048, lon: 77.1734 },
    'udaipur': { lat: 24.5854, lon: 73.7125 },
    'varanasi': { lat: 25.3176, lon: 82.9739 },
    'agra': { lat: 27.1767, lon: 78.0081 },
    'kerala': { lat: 10.8505, lon: 76.2711 },
    'saputara': { lat: 20.5794, lon: 73.7478 },
    'surat': { lat: 21.1702, lon: 72.8311 },
    'chandigarh': { lat: 30.7333, lon: 76.7794 }
};

// Calculate distance between two cities using Haversine formula
const calculateDistance = (origin, destination) => {
    const originCoords = cityCoordinates[origin.toLowerCase()];
    const destCoords = cityCoordinates[destination.toLowerCase()];

    if (!originCoords || !destCoords) {
        // Default estimate if city not found
        return 800; // km
    }

    const R = 6371; // Earth's radius in km
    const dLat = (destCoords.lat - originCoords.lat) * Math.PI / 180;
    const dLon = (destCoords.lon - originCoords.lon) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(originCoords.lat * Math.PI / 180) * Math.cos(destCoords.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
};

// Generate realistic train options
const generateTrainOptions = (origin, destination, date) => {
    const distance = calculateDistance(origin, destination);
    const trains = [];

    // Calculate base price per km
    const basePricePerKm = 1.2; // INR per km for Sleeper
    const acMultiplier = { 'AC 3-Tier': 2.5, 'AC 2-Tier': 3.5, 'AC Chair Car': 2.0 };

    // Calculate duration (average train speed ~60 km/h)
    const baseDurationHours = Math.round(distance / 55);

    if (distance < 400) {
        // Short distance - Day trains
        trains.push({
            id: 'train_1',
            name: 'Vande Bharat Express',
            type: 'AC Chair Car',
            departureTime: '06:00',
            arrivalTime: formatTime(6 + Math.round(distance / 90)),
            duration: `${Math.round(distance / 90)}h`,
            stops: 1,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC Chair Car'] * 1.5),
            tag: 'FASTEST'
        });
        trains.push({
            id: 'train_2',
            name: 'Intercity Express',
            type: 'AC Chair Car',
            departureTime: '08:15',
            arrivalTime: formatTime(8 + Math.round(distance / 65)),
            duration: `${Math.round(distance / 65)}h`,
            stops: 3,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC Chair Car']),
            tag: 'BEST PRICE'
        });
    } else if (distance < 1000) {
        // Medium distance - Mix of day and overnight
        trains.push({
            id: 'train_1',
            name: 'Rajdhani Express',
            type: 'AC 2-Tier',
            departureTime: '16:30',
            arrivalTime: formatTime((16 + baseDurationHours) % 24),
            duration: `${baseDurationHours}h`,
            stops: 2,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC 2-Tier']),
            tag: 'PREMIUM'
        });
        trains.push({
            id: 'train_2',
            name: 'Shatabdi Express',
            type: 'AC Chair Car',
            departureTime: '06:00',
            arrivalTime: formatTime(6 + Math.round(distance / 75)),
            duration: `${Math.round(distance / 75)}h`,
            stops: 4,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC Chair Car']),
            tag: 'BEST PRICE'
        });
        trains.push({
            id: 'train_3',
            name: 'Duronto Express',
            type: 'AC 3-Tier',
            departureTime: '20:00',
            arrivalTime: formatTime((20 + baseDurationHours - 2) % 24),
            duration: `${baseDurationHours - 2}h`,
            stops: 0,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC 3-Tier'] * 1.2),
            tag: 'NON-STOP'
        });
    } else {
        // Long distance - Overnight trains
        trains.push({
            id: 'train_1',
            name: 'Rajdhani Express',
            type: 'AC 2-Tier',
            departureTime: '17:00',
            arrivalTime: formatTime((17 + baseDurationHours) % 24),
            duration: `${baseDurationHours}h`,
            stops: 3,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC 2-Tier']),
            tag: 'PREMIUM'
        });
        trains.push({
            id: 'train_2',
            name: 'Garib Rath',
            type: 'AC 3-Tier',
            departureTime: '19:30',
            arrivalTime: formatTime((19 + baseDurationHours + 3) % 24),
            duration: `${baseDurationHours + 3}h`,
            stops: 6,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC 3-Tier'] * 0.8),
            tag: 'BEST PRICE'
        });
        trains.push({
            id: 'train_3',
            name: 'Superfast Express',
            type: 'AC 3-Tier',
            departureTime: '22:00',
            arrivalTime: formatTime((22 + baseDurationHours + 1) % 24),
            duration: `${baseDurationHours + 1}h`,
            stops: 5,
            price: Math.round(distance * basePricePerKm * acMultiplier['AC 3-Tier']),
            tag: null
        });
    }

    return trains;
};

// Generate flight options
const generateFlightOptions = (origin, destination, date) => {
    const distance = calculateDistance(origin, destination);

    // Flights only make sense for longer distances
    if (distance < 300) {
        return []; // No flights for short distances
    }

    const basePricePerKm = 5; // INR per km for economy
    const flightDuration = Math.max(1, Math.round(distance / 700)); // ~700 km/h avg including boarding

    const flights = [
        {
            id: 'flight_1',
            name: 'IndiGo',
            type: 'Economy',
            departureTime: '06:30',
            arrivalTime: formatTime(6.5 + flightDuration),
            duration: `${flightDuration}h ${Math.round((flightDuration % 1) * 60)}m`,
            stops: 0,
            price: Math.round(distance * basePricePerKm * 0.9),
            tag: 'BEST PRICE'
        },
        {
            id: 'flight_2',
            name: 'Air India',
            type: 'Economy',
            departureTime: '09:15',
            arrivalTime: formatTime(9.25 + flightDuration),
            duration: `${flightDuration}h ${Math.round((flightDuration % 1) * 60)}m`,
            stops: 0,
            price: Math.round(distance * basePricePerKm),
            tag: null
        },
        {
            id: 'flight_3',
            name: 'Vistara',
            type: 'Premium Economy',
            departureTime: '14:00',
            arrivalTime: formatTime(14 + flightDuration),
            duration: `${flightDuration}h ${Math.round((flightDuration % 1) * 60)}m`,
            stops: 0,
            price: Math.round(distance * basePricePerKm * 1.4),
            tag: 'PREMIUM'
        }
    ];

    return flights;
};

// Helper to format time
const formatTime = (hours) => {
    const h = Math.floor(hours) % 24;
    const m = Math.round((hours % 1) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

// Generate hotel options based on destination and budget
const generateHotelOptions = (destination, budget, nights) => {
    const budgetPerNight = budget / (nights || 3);

    // Calculate price tiers
    const budgetPrice = Math.round(budgetPerNight * 0.3);
    const midPrice = Math.round(budgetPerNight * 0.5);
    const luxuryPrice = Math.round(budgetPerNight * 0.8);

    const hotelTemplates = {
        'manali': [
            { name: "Mountain View Hostel", location: "Old Manali", type: "budget" },
            { name: "Apple Country Resort", location: "Mall Road", type: "mid" },
            { name: "The Himalayan Resort & Spa", location: "Solang Valley Road", type: "luxury" }
        ],
        'goa': [
            { name: "Backpacker Panda", location: "Anjuna Beach", type: "budget" },
            { name: "Acron Waterfront Resort", location: "Baga", type: "mid" },
            { name: "Taj Exotica Resort", location: "Benaulim", type: "luxury" }
        ],
        'jaipur': [
            { name: "Zostel Jaipur", location: "Near Hawa Mahal", type: "budget" },
            { name: "Hotel Pearl Palace", location: "Hathroi Fort", type: "mid" },
            { name: "Rambagh Palace", location: "Bhawani Singh Road", type: "luxury" }
        ],
        'default': [
            { name: `${destination} Backpackers Inn`, location: "City Center", type: "budget" },
            { name: `Hotel ${destination} Grand`, location: "Main Road", type: "mid" },
            { name: `The ${destination} Luxury Resort`, location: "Premium Location", type: "luxury" }
        ]
    };

    const templates = hotelTemplates[destination.toLowerCase()] || hotelTemplates['default'];

    return [
        {
            id: 'hotel_1',
            name: templates[0].name,
            location: templates[0].location,
            rating: 4.2,
            reviews: Math.round(150 + Math.random() * 200),
            pricePerNight: budgetPrice,
            totalPrice: budgetPrice * nights,
            amenities: ['Free WiFi', 'Common Kitchen', 'Lockers'],
            image: 'budget',
            tag: 'CHEAPEST'
        },
        {
            id: 'hotel_2',
            name: templates[1].name,
            location: templates[1].location,
            rating: 4.5,
            reviews: Math.round(300 + Math.random() * 400),
            pricePerNight: midPrice,
            totalPrice: midPrice * nights,
            amenities: ['Free WiFi', 'Breakfast', 'Room Service', 'AC'],
            image: 'comfort',
            tag: 'HIGHEST RATED'
        },
        {
            id: 'hotel_3',
            name: templates[2].name,
            location: templates[2].location,
            rating: 4.7,
            reviews: Math.round(500 + Math.random() * 500),
            pricePerNight: luxuryPrice,
            totalPrice: luxuryPrice * nights,
            amenities: ['Free WiFi', 'Spa', 'Pool', 'Fine Dining', 'Concierge'],
            image: 'luxury',
            tag: 'PREMIUM'
        }
    ];
};

module.exports = {
    calculateDistance,
    generateTrainOptions,
    generateFlightOptions,
    generateHotelOptions
};
