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
        const employee = await Employee.findById(req.params.id);
        
        if (!employee) {
            return res.status(404).json({error: "Employee not found"});
        }
        
        // Check if user is authenticated
        if (req.user) {
            // Authenticated user gets full employee data
            res.json(employee);
        } else {
            // Unauthenticated user gets limited data (firstName and lastName only)
            res.json({
                firstName: employee.firstName,
                lastName: employee.lastName
            });
        }
    } catch (error) {
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
    try {
        const employees = await Employee.find()
            .populate('manager', 'firstName lastName')
            .populate('company', 'name');
        
        // Check if user is authenticated (req.user will be set by the auth middleware)
        if (req.user) {
            // Authenticated user gets full employee data
            res.json(employees);
        } else {
            // Unauthenticated user gets limited data (firstName and lastName only)
            const limitedEmployees = employees.map(employee => {
                return {
                    firstName: employee.firstName,
                    lastName: employee.lastName
                };
            });
            res.json(limitedEmployees);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getAllEmployeesByCompany = async (req, res) => {
    try {
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({error: "Authentication required"});
        }
        
        const companyId = req.params.id;
        
        // Check if user belongs to the requested company
        if (req.user.companyId.toString() !== companyId) {
            return res.status(403).json({
                error: "Unauthorized. You can only access employees from your own company"
            });
        }
        
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({error: "Company not exists, cannot retrieve employees"});
        }
        
        const employees = await Employee.find({company: companyId})
            .populate('manager', 'firstName lastName');
        
        res.status(200).json({
            message: `Here is all the employees for ${company.name}`,
            employees
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
