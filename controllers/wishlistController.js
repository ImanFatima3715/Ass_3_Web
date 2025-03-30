const Wishlist = require("../models/wishlistModel");

// Get wishlist for a student
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ studentId: req.params.studentId }).populate("tutors");
    res.json(wishlist ? wishlist.tutors : []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add tutor to wishlist
exports.addToWishlist = async (req, res) => {
  const { studentId, tutorId } = req.body;
  try {
    let wishlist = await Wishlist.findOne({ studentId });
    if (!wishlist) {
      wishlist = new Wishlist({ studentId, tutors: [tutorId] });
    } else if (!wishlist.tutors.includes(tutorId)) {
      wishlist.tutors.push(tutorId);
    }
    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove tutor from wishlist
exports.removeFromWishlist = async (req, res) => {
  const { studentId, tutorId } = req.body;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { studentId },
      { $pull: { tutors: tutorId } },
      { new: true }
    );
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
