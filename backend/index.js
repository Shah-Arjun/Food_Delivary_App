// Import the Express framework
const express = require("express");

// Import the MongoDB connection function from db.j
const mongoDB = require("./db");

// Create an instance of the Express application
const app = express();

// Define the port on which the server will run
const port = 5000;

// Connect to MongoDB Atlas when the server starts
mongoDB(); // 👈 Make sure this is called, This establishes the database connection

// Start the Express server and listen on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});