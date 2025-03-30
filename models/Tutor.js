const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  name: String,
  subjects: [String],
  location: String,
  price: Number,
  rating: Number,
  availability: [String],
});

module.exports = mongoose.model("Tutor", TutorSchema);











