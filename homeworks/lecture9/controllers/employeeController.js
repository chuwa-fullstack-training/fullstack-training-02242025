const Employee = require('../models/employeeSchema')
const Company = require('../models/companySchema');

exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).send('create employee succeed');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({error: "Employee not found"})
        }
        res.json(employee)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateEmployeeById = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true})
        if(!updatedEmployee){
            return res.status(404).json({error: "Employee not found"})
        }
        res.status(200).json(updatedEmployee)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.deleteEmployeeById = async (req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        if(!deleteEmployee){
            return res.status(404).json({error: "Employee not found, cannot delete"})
        }
        res.status(200).json({
            message: 'Employee deleted',
            deleteEmployee
        });
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getAllEmployees = async (req, res) => {
    try{
        const employees = await Employee.find()
            .populate('manager', 'firstName lastName')
            .populate('company', 'name')
        res.json(employees)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getAllEmployeesByCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params.id)
        if(!company){
            return res.status(404).json({error: "Company not exists, cannot retrieve employees"})
        }
        const employees = await Employee.find({company : req.params.id})
            .populate('manager', 'firstName lastName')

        res.status(200).json({
            message: `Here is all the employees for ${company.name}`,
            employees
        })
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

