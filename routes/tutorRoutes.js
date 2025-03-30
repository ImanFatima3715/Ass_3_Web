const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Tutor routes working!" });
});

module.exports = router; // ✅ Ensure this line is present!





// const express = require("express");
// const router = express.Router();
// const Tutor = require("../models/Tutor"); // Ensure this path is correct

// // GET /api/tutors (with filters)
// router.get("/", async (req, res) => {
//   try {
//     const { subject, location, minPrice, maxPrice, minRating, availability } = req.query;
//     let query = {};

//     if (subject) query.subjects = { $in: [subject] };
//     if (location) query.location = location;
    
//     // Ensure price filtering doesn't overwrite itself
//     if (minPrice || maxPrice) query.price = {};
//     if (minPrice) query.price.$gte = parseFloat(minPrice);
//     if (maxPrice) query.price.$lte = parseFloat(maxPrice);

//     if (minRating) query.rating = { $gte: parseFloat(minRating) };

//     // Ensure availability is treated as an array if needed
//     if (availability) query.availability = { $in: [Array.isArray(availability) ? availability : [availability]] };

//     const tutors = await Tutor.find(query);
//     res.status(200).json(tutors);
//   } catch (error) {
//     console.error("Error fetching tutors:", error);
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });
// module.exports = router;
//  // ✅ Ensure this line exists
