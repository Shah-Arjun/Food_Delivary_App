// Import Express and create a router
const express = require("express");
const router = express.Router();

// Correctly import the User model (adjust path as needed)
const User = require("../models/User");

const { body, validationResult } = require("express-validator");

// Import jsonwebtoken to generate and verify JWT tokens for user authentication
const jwt = require("jsonwebtoken");

// Import bcryptjs for hashing passwords securely (used for creating and verifying hashed passwords)
const bcrypt = require("bcryptjs");

// Secret key used to sign and verify JWT tokens (keep this secure and do not expose publicly)
const jwtSecret = "MynameisDigitalMindAndEditzYouTubeChannel";

// Define a POST route to create a new user
router.post(
    "/createuser", [
        body("email").isEmail(),
        body("name").isLength({ min: 5 }),
        body("password", "incorrect password").isLength({ min: 5 }),
    ],
    //for debugging
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const salt = await bcrypt.genSalt(10); //generate salt
        let secPassword = await bcrypt.hash(req.body.password, salt); //hash the password entered by user using salt

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location,
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
            });
        }
    }
);

// Define a POST route to login user
router.post("/loginuser", [
        body("email").isEmail(),
        body("password", "incorrect password").isLength({ min: 5 }),
    ],
    async(req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        let email = req.body.email;

        try {
            let userData = await User.findOne({ email });

            if (!userData) {
                return res.status(400).json({ success: false, error: "Invalid email or password" });
            }

            // Compare the entered password with the hashed password stored in the database
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
            if (!pwdCompare) {
                return res.status(400).json({ success: false, error: "Try logging with correct credentials (wrong password)" });
            }


            const data = {
                user: {
                    id: userData.id
                }

            }
            const authToken = jwt.sign(data, jwtSecret);

            // ✅ Passwords match, login successful
            return res.json({ success: true, authToken: authToken });

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    });

module.exports = router;