const session = require('express-session'); // Use session-based authentication

const authMiddleware = (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({ message: "Access denied. Please log in." });
    }

    req.user = req.session.user; // Attach user data to request object
    next(); // Proceed to next middleware or route handler
};

module.exports = authMiddleware;
