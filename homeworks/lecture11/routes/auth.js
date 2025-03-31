const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await Employee.findOne({ username });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({
    id: user._id,
    username: user.username,
    company: user.company.toString(),
  }, 'secretKey', { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
