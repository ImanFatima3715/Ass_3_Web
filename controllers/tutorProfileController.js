const TutorProfile = require("../models/TutorProfile");

// Get tutor profile
exports.getTutorProfile = async (req, res) => {
  try {
    const tutor = await TutorProfile.findOne({ userId: req.user.id });
    if (!tutor) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update tutor profile
exports.updateTutorProfile = async (req, res) => {
  try {
    let tutor = await TutorProfile.findOne({ userId: req.user.id });

    if (!tutor) {
      tutor = new TutorProfile({ ...req.body, userId: req.user.id });
      await tutor.save();
    } else {
      tutor = await TutorProfile.findOneAndUpdate({ userId: req.user.id }, req.body, { new: true });
    }

    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Upload tutor profile image
exports.uploadProfileImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
};
