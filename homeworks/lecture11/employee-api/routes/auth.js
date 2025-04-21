// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Employee = require('../models/Employee');

// POST /api/login
router.post('/login', async (req, res) => {
  const { firstName, lastName } = req.body;

  //check if user exists
  const user = await Employee.findOne({ firstName, lastName });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // token
  const token = jwt.sign(
    {
      userId: user._id,
      companyId: user.company
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
