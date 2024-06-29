const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  try {
    const { mobile, review } = req.body;
    const newReview = new Review({ mobile, review });
    await newReview.save();
    // Send a JSON response indicating success
    res.status(201).json({ message: 'Review saved successfully' });
  } catch (error) {
    // Send a JSON response indicating error
    res.status(400).json({ error: error.message });
  }
};
