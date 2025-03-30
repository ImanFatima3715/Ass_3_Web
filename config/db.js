const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; // ✅ Get MONGO_URI from .env
        console.log("🔍 Connecting to MongoDB...", mongoUri);

        if (!mongoUri) {
            throw new Error("❌ MONGO_URI is missing from .env file!");
        }

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
