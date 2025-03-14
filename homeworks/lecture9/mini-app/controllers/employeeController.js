const Employee = require('../models/Employee');
const Company = require('../models/Company');

exports.createEmployee = async (req, res) => {
    try{
        const employee = new Employee(req.body);
        await employee.save();

        await Company.findByIdAndUpdate(req.body.company, {$push: {employees: employee._id}});
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('company').populate('manager');
        res.json(employees)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company').populate('manager');
        if(!employee) return res.status(404).json({error: 'Employee not found'});
        res.json(employee);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.updateEmployee = async (req, res) => {
    try{
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedEmployee) return res.status(404).json({error : 'Employee not found.'});
        res.json(updatedEmployee);
    } catch ( error ){
        res.status(500).json({error: error.message});
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({message: 'Employee deleted'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getEmployeeByCompany = async (req, res) => {
    try {
        const employees = await Employee.find({company: req.params.companyId}).populate('manager');
        res.json(employees);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}