const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Employee = require('../models/Employee')

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const {firstName, lastName} = req.body;

    try {
        const user = await Employee.findOne({firstName, lastName});
        if(!user){
            res.status(401).json({message: "Invalid credentials"})
            return;
        }

        const token = jwt.sign(
            {
                id: user._ud,
                firstName: user.firstName,
            },
            JWT_SECRET,
            {expiresIn: '1h'},
        );
        res.json({token});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server error'});
    }
});

module.exports = router;