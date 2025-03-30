require("dotenv").config(); // Load environment variables
console.log("🔍 MONGO_URI:", process.env.MONGO_URI); // Debugging step

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db"); // Import DB connection

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Check if MONGO_URI is correctly loaded before connecting
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is undefined! Check your .env file.");
    process.exit(1);
}

// ✅ Connect to MongoDB
connectDB();
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
