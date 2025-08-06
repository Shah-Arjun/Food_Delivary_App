const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

// Route to create a new user
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      await User.create({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false });
    }
  }
);

// Route to login user
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
console.log("Searching for user:", email); //sfdfdf
const userData = await User.findOne({ email });
console.log("Found user:", userData); //dsffsfsf

      if (!userData) {
        return res.status(400).json({ success: false, error: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, userData.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, error: "Invalid credentials" });
      }

      const payload = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

      res.json({ success: true, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false });
    }
  }
);

module.exports = router;
