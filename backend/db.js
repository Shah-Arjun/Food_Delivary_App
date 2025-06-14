const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/gofoodmern";

const mongoDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to local MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;