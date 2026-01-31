const asyncHandler = require('express-async-handler');
const {
    generateTrainOptions,
    generateFlightOptions,
    generateHotelOptions
} = require('../services/planningService');

/**
 * @desc    Get transport options (trains and flights)
 * @route   POST /api/planning/transport
 * @access  Public
 */
const getTransportOptions = asyncHandler(async (req, res) => {
    const { origin, destination, date } = req.body;

    if (!origin || !destination) {
        res.status(400);
        throw new Error('Please provide origin and destination');
    }

    const trains = generateTrainOptions(origin, destination, date);
    const flights = generateFlightOptions(origin, destination, date);

    res.status(200).json({
        success: true,
        origin,
        destination,
        date,
        trains,
        flights
    });
});

/**
 * @desc    Get hotel options
 * @route   POST /api/planning/hotels
 * @access  Public
 */
const getHotelOptions = asyncHandler(async (req, res) => {
    const { destination, budget, nights } = req.body;

    if (!destination) {
        res.status(400);
        throw new Error('Please provide destination');
    }

    const hotels = generateHotelOptions(destination, budget || 20000, nights || 3);

    res.status(200).json({
        success: true,
        destination,
        hotels
    });
});

module.exports = {
    getTransportOptions,
    getHotelOptions
};
