const Employee = require('../schema').Employee
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => {
    try {
        const {firstName, lastName} = req.body
        let employee = await Employee.findOne({firstName, lastName})

        if(!employee) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            employee : {
                firstName,
                lastName
            }
        }

        const token = await jwt.sign(payload, 'secretkey00000aaaaaaaa', {
              expiresIn: '30d'
            });

        res.json({ token });
    } catch(err) {
         res.status(401).json({msg: err.message})
    }
})
module.exports = router;
