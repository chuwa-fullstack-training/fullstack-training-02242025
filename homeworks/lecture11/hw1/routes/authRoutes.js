const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

// POST /api/login
router.post('/login', async (req, res) => {
  const { firstName, lastName, password } = req.body;

  try {
    const user = await User.findOne({ firstName, lastName });
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create and send JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
