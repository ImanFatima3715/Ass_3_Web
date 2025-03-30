const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  metric: String, // e.g., "Popular Subjects", "User Growth"
  data: Object,   // JSON object storing report details
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
