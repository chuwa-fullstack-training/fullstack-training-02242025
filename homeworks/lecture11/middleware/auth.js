const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');
const JWT_SECRET = process.env.JWT_SECRET || '';

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).send({ error: 'Authentication required' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const employee = await Employee.findOne({ _id: decoded._id });

    if (!employee) {
      return res.status(401).send({ error: 'Authentication failed' });
    }

    req.token = token;
    req.employee = employee;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Not authenticated' });
  }
};

module.exports = authenticate;
