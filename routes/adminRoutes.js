const express = require("express");
const { getPendingTutors, verifyTutor } = require("../controllers/adminVerificationController");
const router = express.Router();

router.get("/tutor-verification", getPendingTutors);
router.post("/tutor-verify/:id", verifyTutor);

module.exports = router;
