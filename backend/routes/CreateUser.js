// Import Express and create a router
const express = require("express");
const router = express.Router();

// Correctly import the User model (adjust path as needed)
const User = require("../models/User");

const { body, validationResult } = require("express-validator");

// Define a POST route to create a new user
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
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
router.post("/loginuser", async (req, res) => {
  let email = req.body.email;

  try {
    let userData = await User.findOne({ email });

    if (!userData) {
      return res
        .status(400)
        .json({ errors: "Try logging with correct credentials" });
    }

if (req.body.password !== userData.password){
    return res
        .json({ success: true });
}
return res
        .status(400)
        .json({ errors: "Try logging with correct credentials" });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
});

module.exports = router;
