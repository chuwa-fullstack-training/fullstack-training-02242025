const express = require("express");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
require("dotenv").config();

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

// Login API - Generate JWT
router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await Employee.findOne({ firstName, lastName });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, company: user.company },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
