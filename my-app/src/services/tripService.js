// Trip Planning Service - All trip-related API calls
import api from './api';

/**
 * Trip Planning Service
 * Handles all API calls related to trip planning functionality
 */
const tripService = {
    /**
     * Generate AI-powered itinerary
     * @param {object} params - Trip parameters
     * @param {string} params.destination - Destination city
     * @param {number} params.days - Number of days
     * @param {number} params.budget - Total budget in INR
     * @param {string} params.preference - Travel preference (cheapest/fastest/balanced)
     * @param {object} params.transport - Selected transport option
     * @param {object} params.hotel - Selected hotel option
     */
    generateItinerary: async ({ destination, days, budget, preference, transport, hotel }) => {
        return api.post('/api/trips/generate', {
            destination,
            days,
            budget,
            preference,
            transport,
            hotel
        });
    },

    /**
     * Get transport options (trains and flights)
     * @param {object} params
     * @param {string} params.origin - Origin city
     * @param {string} params.destination - Destination city
     * @param {string} params.date - Travel date (YYYY-MM-DD)
     */
    getTransportOptions: async ({ origin, destination, date }) => {
        return api.post('/api/planning/transport', {
            origin,
            destination,
            date
        });
    },

    /**
     * Get hotel options
     * @param {object} params
     * @param {string} params.destination - Destination city
     * @param {number} params.budget - Budget for accommodation
     * @param {number} params.nights - Number of nights
     */
    getHotelOptions: async ({ destination, budget, nights }) => {
        return api.post('/api/planning/hotels', {
            destination,
            budget,
            nights
        });
    },

    /**
     * Save trip to user's account
     * @param {object} tripData - Complete trip data
     */
    saveTrip: async (tripData) => {
        return api.post('/api/trips/save', tripData);
    },

    /**
     * Get user's saved trips
     */
    getSavedTrips: async () => {
        return api.get('/api/trips/saved');
    },

    /**
     * Delete a saved trip
     * @param {string} tripId - Trip ID to delete
     */
    deleteTrip: async (tripId) => {
        return api.delete(`/api/trips/${tripId}`);
    }
};

export default tripService;
