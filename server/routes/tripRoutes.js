const express = require('express');
const router = express.Router();
const {
    getTrips,
    createTrip,
    updateTrip,
    deleteTrip
} = require('../controllers/tripController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTrips).post(protect, createTrip);
router.route('/:id').delete(protect, deleteTrip).put(protect, updateTrip);

module.exports = router;
