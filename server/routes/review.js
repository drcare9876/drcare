// File: routes/review.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');

router.post('/review', reviewController.addReview);

module.exports = router;
