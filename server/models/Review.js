// File: models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Review', reviewSchema);
