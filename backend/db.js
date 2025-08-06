const mongoose = require("mongoose"); // ✅ Import Mongoose for MongoDB connection

// 🔐 Connection URI to your MongoDB Atlas cluster
//const mongoURI = process.env.MONGO_URI
// const mongoDB = async() => {
//     try {
//         // 🌐 Connect to MongoDB Atlas
//         await mongoose.connect(mongoURI);
//         console.log("✅ Connected to MongoDB Atlas");

//         // 📦 Access the native MongoDB database object from the Mongoose connection
//         const db = mongoose.connection.db;

//         // 🍴 Access the 'food_items' collection directly
//         const collection = db.collection("food_items");

//         // 🔍 Fetch all documents in the 'food_items' collection as an array named data
//         const data = await collection.find({}).toArray();

//         // 🧾 Print number of documents retrieved
//         console.log("📦 Fetched food_items:", data.length, "items");

//         // 🖨️ Print all documents (pretty format)
//         // console.log(JSON.stringify(data, null, 2));

//         // 🌍 Make data globally accessible (optional, useful for reusing without repeated DB queries)
//         global.food_items = data;
//     } catch (err) {
//         // ⚠️ Handle any connection or fetch errors
//         console.error("❌ MongoDB connection error:", err);

//         // 🚫 Exit the process with failure code (1)
//         process.exit(1);
//     }
// };


const connectMongoDB = async() => {
    try {
        // 🌐 Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ Connected to MongoDB Atlas");

        // 📦 Get database reference
        const db = mongoose.connection.db;

        // 🍴 Fetch food_items
        const foodItemsCollection = db.collection("food_items");
        const food_items = await foodItemsCollection.find({}).toArray();

        // 🗂️ Fetch foodCategory
        const foodCategoryCollection = db.collection("foodCategory");
        const foodCategory = await foodCategoryCollection.find({}).toArray();

        // 🌍 Make globally accessible
        global.food_items = food_items;
        global.foodCategory = foodCategory;

        console.log(`📦 Loaded ${food_items.length} food items and ${foodCategory.length} categories.`);
        console.log(global.food_items, global.foodCategory)

    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
};

module.exports = connectMongoDB;