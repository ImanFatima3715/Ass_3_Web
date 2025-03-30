const express = require("express");
const { 
    getTutorProfile, 
    updateTutorProfile, 
    uploadProfileImage 
} = require("../controllers/tutorProfileController");
const upload = require("../middleware/uploadMiddleware");
const authMiddleware = require("../middleware/authMiddleware"); // Correct import

const router = express.Router();

// Protected Routes
router.get("/profile", authMiddleware, getTutorProfile);
router.put("/profile", authMiddleware, updateTutorProfile);
router.post("/upload", authMiddleware, upload.single("image"), uploadProfileImage);

// Example protected route (optional)
router.get("/protected-route", authMiddleware, (req, res) => {
    res.json({ message: "You have accessed a protected route!", user: req.user });
});

module.exports = router;
