const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  tutors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tutor" }],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
