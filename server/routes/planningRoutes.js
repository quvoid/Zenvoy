const express = require('express');
const router = express.Router();
const {
    getTransportOptions,
    getHotelOptions
} = require('../controllers/planningController');

// Transport options endpoint
router.post('/transport', getTransportOptions);

// Hotel options endpoint
router.post('/hotels', getHotelOptions);

module.exports = router;
