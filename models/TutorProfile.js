const mongoose = require("mongoose");

const TutorProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  name: { type: String, required: true },
  qualifications: { type: String, required: true },
  bio: { type: String, required: true },
  subjects: [{ type: String, required: true }],
  hourlyRate: { type: Number, required: true },
  availability: { type: String, required: true },
  teachingMode: { type: String, enum: ["online", "in-person"], required: true },
  profileImage: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model("TutorProfile", TutorProfileSchema);
