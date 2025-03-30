const Session = require("../models/sessionModel");

// Get all sessions
exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a session
exports.createSession = async (req, res) => {
  const { tutorName, studentId, date, time, mode } = req.body;
  try {
    const newSession = new Session({ tutorName, studentId, date, time, mode });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete session
exports.deleteSession = async (req, res) => {
  try {
    await Session.findByIdAndDelete(req.params.id);
    res.json({ message: "Session deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
