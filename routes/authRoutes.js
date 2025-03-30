const express = require("express");
const router = express.Router();

// Dummy authentication route
router.get("/", (req, res) => {
    res.json({ message: "Auth API working!" });
});

module.exports = router;
