const mongoose = require("mongoose");

const tutorVerificationSchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor", // Reference to the Tutor model
    required: true,
  },
  name: String,
  subjects: [String],
  hourlyRate: Number,
  verificationStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const TutorVerification = mongoose.model("TutorVerification", tutorVerificationSchema);
module.exports = TutorVerification;
