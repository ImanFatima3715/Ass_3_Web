const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  sessionType: String,
  selectedSlot: String,
  bookedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
