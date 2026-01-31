const express = require('express');
const router = express.Router();
const {
    getTrips,
    createTrip,
    updateTrip,
    deleteTrip
} = require('../controllers/tripController');
const { generateTrip } = require('../controllers/tripGenController');

const { protect } = require('../middleware/authMiddleware');

router.post('/generate', generateTrip); // Public or Protected? Let's keep it open for now or add protect later
router.route('/').get(protect, getTrips).post(protect, createTrip);
router.route('/:id').delete(protect, deleteTrip).put(protect, updateTrip);

module.exports = router;
