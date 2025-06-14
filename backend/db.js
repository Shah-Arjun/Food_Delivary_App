const mongoose = require("mongoose"); // ✅ Import Mongoose for MongoDB connection

// 🔐 Connection URI to your MongoDB Atlas cluster
const mongoURI = "mongodb+srv://gofood:mern123@cluster0.cznfsrj.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async() => {
    try {
        // 🌐 Connect to MongoDB Atlas
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB Atlas");

        // 📦 Access the native MongoDB database object from the Mongoose connection
        const db = mongoose.connection.db;

        // 🍴 Access the 'food_items' collection directly
        const collection = db.collection("food_items");

        // 🔍 Fetch all documents in the 'food_items' collection as an array named data
        const data = await collection.find({}).toArray();

        // 🧾 Print number of documents retrieved
        console.log("📦 Fetched food_items:", data.length, "items");

        // 🖨️ Print all documents (pretty format)
        // console.log(JSON.stringify(data, null, 2));

        // 🌍 Make data globally accessible (optional, useful for reusing without repeated DB queries)
        global.food_items = data;
    } catch (err) {
        // ⚠️ Handle any connection or fetch errors
        console.error("❌ MongoDB connection error:", err);

        // 🚫 Exit the process with failure code (1)
        process.exit(1);
    }
};

// ✅ Export the function so it can be imported and called from other files (like index.js)
module.exports = mongoDB;