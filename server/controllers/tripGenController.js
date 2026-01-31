const asyncHandler = require('express-async-handler');
const { generateTripItinerary } = require('../services/aiService');

// @desc    Generate a new trip itinerary using AI
// @route   POST /api/trips/generate
// @access  Private (or Public if we want to allow guests)
const generateTrip = asyncHandler(async (req, res) => {
    const { destination, days, budget, preference } = req.body;

    if (!destination || !days || !budget) {
        res.status(400);
        throw new Error('Please provide destination, days, and budget');
    }

    try {
        const itinerary = await generateTripItinerary(destination, days, budget, preference);
        res.status(200).json(itinerary);
    } catch (error) {
        res.status(500);
        throw new Error('Failed to generate trip');
    }
});

module.exports = { generateTrip };
