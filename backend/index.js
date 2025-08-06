const express = require("express");
const mongoDB = require("./db");
const cors = require("cors");
const connectMongoDB = require("./db");
require('dotenv').config();               // Load environment variables from .env



const app = express();
const port = 5000;

// Connect to MongoDB
connectMongoDB();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


// Middleware
app.use(
    cors({
        origin: "http://localhost:3000", // Your frontend port
        credentials: true,
    })
);
app.use(express.json()); // Parse incoming JSON

// API Routes
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

// Default route
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});