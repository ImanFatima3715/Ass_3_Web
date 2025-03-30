const express = require("express");
const { getAvailableSlots, bookSession } = require("../controllers/bookingController");

const router = express.Router();

router.get("/slots", getAvailableSlots);
router.post("/", bookSession);

module.exports = router;