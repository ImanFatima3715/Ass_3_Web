const express = require("express");
const { getWishlist, addToWishlist, removeFromWishlist } = require("../controllers/wishlistController");
const router = express.Router();

router.get("/:studentId", getWishlist);
router.post("/", addToWishlist);
router.delete("/", removeFromWishlist);

module.exports = router;
