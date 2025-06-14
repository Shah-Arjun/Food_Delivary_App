const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://gofood:mern123@cluster0.cznfsrj.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;