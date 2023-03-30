const express = require('express');
const router = express.Router();
const loginTimesController = require('../controllers/loginTimesController');

// Define a route for retrieving all login times
router.get('/', loginTimesController.getAllLoginTimes);

// Define a route for retrieving login times by user ID
router.get('/:userId', loginTimesController.getLoginTimesByUserId);

// Define a route for creating login times
router.post('/add', loginTimesController.createLoginTimes);

// Define a route for updating login times
router.put('/update', loginTimesController.updateLoginTimes);

module.exports = router;