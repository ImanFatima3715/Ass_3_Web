const express = require("express");
const { getSessions, createSession, deleteSession } = require("../controllers/sessionController");
const router = express.Router();

router.get("/", getSessions);
router.post("/", createSession);
router.delete("/:id", deleteSession);

module.exports = router;
