const TutorVerification = require("../models/TutorVerification");

// Get pending tutor verification requests
exports.getPendingTutors = async (req, res) => {
  try {
    const pendingTutors = await TutorVerification.find({ verificationStatus: "pending" });
    res.json(pendingTutors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending tutors", error });
  }
};

// Approve or Reject Tutor Verification
exports.verifyTutor = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTutor = await TutorVerification.findByIdAndUpdate(
      id,
      { verificationStatus: status },
      { new: true }
    );
    res.json(updatedTutor);
  } catch (error) {
    res.status(500).json({ message: "Error updating verification status", error });
  }
};
