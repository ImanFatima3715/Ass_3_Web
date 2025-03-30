const Review = require("../models/reviewModel");

// Get all reviews for a tutor
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ tutorId: req.params.tutorId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Submit a new review
exports.createReview = async (req, res) => {
  const { tutorId, studentId, studentName, rating, comment } = req.body;

  try {
    const newReview = new Review({ tutorId, studentId, studentName, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
