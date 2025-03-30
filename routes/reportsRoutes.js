const express = require("express");
const router = express.Router();
const reportsController = require("../controllers/reportsController");

router.get("/dashboard", reportsController.getReports);

module.exports = router;
