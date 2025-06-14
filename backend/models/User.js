// Importing Mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Destructuring Schema from mongoose for easy access
const { Schema } = mongoose;

// Defining a schema for the User collection
const UserSchema = new Schema({
    name: { // User's name - required string
        type: String,
        required: true,
    },

    location: { // User's location - required string
        type: String,
        required: true,
    },

    email: { // User's email - required string
        type: String,
        required: true,
    },

    password: { // User's password - required string
        type: String,
        required: true,
    },

    date: { // Date of account creation - defaults to current time
        type: Date,
        default: Date.now,
    },
});

// Exporting the model named 'user' which uses UserSchema
// This will create a collection called 'users' in MongoDB
module.exports = mongoose.model("user", UserSchema);