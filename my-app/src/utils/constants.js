/**
 * Application Constants
 * Centralized location for all app-wide constants
 */

// City suggestions for autocomplete
export const CITY_SUGGESTIONS = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Goa',
    'Pune',
    'Jaipur',
    'Kerala',
    'Shimla',
    'Manali',
    'Udaipur',
    'Agra',
    'Varanasi',
    'Kolkata',
    'Hyderabad',
    'Chennai',
    'Rishikesh',
    'Darjeeling',
    'Ooty',
    'Ladakh',
    'Andaman'
];

// Travel preferences
export const TRAVEL_PREFERENCES = [
    { value: 'cheapest', label: 'Cheapest', icon: 'IndianRupee' },
    { value: 'fastest', label: 'Fastest', icon: 'Zap' },
    { value: 'balanced', label: 'Balanced', icon: 'Scale' }
];

// Traveler options
export const TRAVELER_OPTIONS = [
    { value: 1, label: '1 Traveler' },
    { value: 2, label: '2 Travelers' },
    { value: 3, label: '3 Travelers' },
    { value: 4, label: '4+ Travelers' }
];

// Budget estimates per day (for estimation)
export const DAILY_ESTIMATES = {
    food: 800,      // ₹800 per day for food
    activities: 500, // ₹500 per day for activities
    misc: 300       // ₹300 per day for miscellaneous
};

// API Endpoints
export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/api/auth/login',
        REGISTER: '/api/auth/register',
        ME: '/api/auth/me'
    },
    TRIPS: {
        GENERATE: '/api/trips/generate',
        SAVE: '/api/trips/save',
        SAVED: '/api/trips/saved'
    },
    PLANNING: {
        TRANSPORT: '/api/planning/transport',
        HOTELS: '/api/planning/hotels'
    }
};

// Wizard steps
export const WIZARD_STEPS = {
    SEARCH: 'SEARCH',
    TRANSPORT: 'TRANSPORT',
    STAY: 'STAY',
    ITINERARY: 'ITINERARY'
};

// Transport types
export const TRANSPORT_TYPES = {
    TRAIN: 'train',
    FLIGHT: 'flight',
    BUS: 'bus'
};

// Hotel categories
export const HOTEL_CATEGORIES = {
    BUDGET: 'budget',
    COMFORT: 'comfort',
    LUXURY: 'luxury'
};

// Animation durations (in ms)
export const ANIMATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500
};

// Local storage keys
export const STORAGE_KEYS = {
    TOKEN: 'token',
    USER: 'user',
    THEME: 'theme',
    SAVED_TRIPS: 'savedTrips'
};
