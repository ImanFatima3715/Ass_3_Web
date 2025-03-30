const Report = require("../models/Reports");
const Session = require("../models/sessionModel");
const User = require("../models/User");
const Tutor = require("../models/Tutor");

exports.getReports = async (req, res) => {
  try {
    const subjectPopularity = await Session.aggregate([
      { $group: { _id: "$subject", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const sessionCompletion = await Session.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    const userGrowth = await User.aggregate([
      { 
        $group: { 
          _id: { $year: "$createdAt" }, 
          count: { $sum: 1 } 
        } 
      },
    ]);

    const cityUsage = await User.aggregate([
      { $group: { _id: "$city", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.json({
      subjectPopularity,
      sessionCompletion,
      userGrowth,
      cityUsage,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports", error });
  }
};
