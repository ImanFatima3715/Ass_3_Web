const express = require("express");
const { getReviews, createReview } = require("../controllers/reviewController");
const router = express.Router();

router.get("/:tutorId", getReviews);
router.post("/", createReview);

module.exports = router;
