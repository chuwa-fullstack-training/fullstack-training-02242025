const Employee = require('../models/employeeSchema')

exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).send('create employee succeed');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};