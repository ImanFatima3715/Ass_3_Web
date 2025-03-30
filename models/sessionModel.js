const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  tutorName: String,
  studentId: String,
  date: Date,
  time: String,
  mode: { type: String, enum: ["online", "in-person"] },
  status: { type: String, enum: ["upcoming", "completed", "canceled"], default: "upcoming" },
});

module.exports = mongoose.model("Session", sessionSchema);
