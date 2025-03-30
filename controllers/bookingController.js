const Booking = require("../models/Booking");

exports.getAvailableSlots = async (req, res) => {
  const allSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
  const bookedSlots = await Booking.find().distinct("selectedSlot");
  const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
  res.json(availableSlots);
};

exports.bookSession = async (req, res) => {
  try {
    const { name, email, sessionType, selectedSlot } = req.body;

    const alreadyBooked = await Booking.findOne({ selectedSlot });
    if (alreadyBooked) {
      return res.status(400).json({ message: "Slot already booked!" });
    }

    const newBooking = new Booking({ name, email, sessionType, selectedSlot });
    await newBooking.save();
    
    res.json({ message: "Booking successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
