const express = require('express');
const { generateToken } = require('../controllers/loginController');

const router = express.Router();

router.post('/login', generateToken);

module.exports = router;
