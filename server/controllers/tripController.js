const asyncHandler = require('express-async-handler');
const Trip = require('../models/Trip');

// @desc    Get user trips
// @route   GET /api/trips
// @access  Private
const getTrips = asyncHandler(async (req, res) => {
    const trips = await Trip.find({ user: req.user.id });
    res.status(200).json(trips);
});

// @desc    Set trip
// @route   POST /api/trips
// @access  Private
const createTrip = asyncHandler(async (req, res) => {
    if (!req.body.destination) {
        res.status(400);
        throw new Error('Please add a destination');
    }

    const trip = await Trip.create({
        user: req.user.id,
        destination: req.body.destination,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        travelers: req.body.travelers,
        budget: req.body.budget,
        preference: req.body.preference,
        itinerary: req.body.itinerary || [] // Can be empty initially or populated by AI later
    });

    res.status(200).json(trip);
});

// @desc    Update trip
// @route   PUT /api/trips/:id
// @access  Private
const updateTrip = asyncHandler(async (req, res) => {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
        res.status(400);
        throw new Error('Trip not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the trip user
    if (trip.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedTrip);
});

// @desc    Delete trip
// @route   DELETE /api/trips/:id
// @access  Private
const deleteTrip = asyncHandler(async (req, res) => {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
        res.status(400);
        throw new Error('Trip not found');
    }

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Make sure the logged in user matches the trip user
    if (trip.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    await trip.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getTrips,
    createTrip,
    updateTrip,
    deleteTrip
};
