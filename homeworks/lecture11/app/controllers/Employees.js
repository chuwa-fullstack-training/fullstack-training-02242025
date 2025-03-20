const { Company } = require('../schema');

const Employee = require('../schema').Employee

const getAllEmployees = async (req, res) => {
    try {
      if(req.user) {
        const employees = await Employee.find();
        // [{"_id":"67d9e18b9571b371ecaf9d46","firstName":"Yin","lastName":"Fei","company":"67d9e18a9571b371ecaf9d43","jobTitle":"Software Engineer","resigned":false,"salary":90000,"manager":"67d9e18b9571b371ecaf9d4a","startDate":"2025-03-18T21:11:39.311Z","__v":0},
        // {"_id":"67d9e18b9571b371ecaf9d4a","firstName":"Miek","lastName":"Manager","company":"67d9e18a9571b371ecaf9d43","jobTitle":"Manager","resigned":false,"salary":10000000,"manager":null,"startDate":"2025-03-18T21:11:39.435Z","__v":0}]
        res.status(200).json(employees)
      }
      // If the user is not logged in (anonymous), return only firstName and lastName
      const employees = await Employee.find({}, 'firstName lastName');
      res.status(200).json(employees)
    } catch {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
}


const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created' });
    // res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
const updateEmployee = async (req, res) => {
  try {
    // find the user
    const employee = await Employee.findById(req.params?.id);

    // update the user
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.lastName ?? employee.lastName;
    employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
    employee.company = req.body.company ?? employee.company; //this is object id
    employee.salary = req.body.salary ?? employee.salary;
    employee.manager = req.body.manager ?? employee.manager;
    let companyObject
    if (req.body.company) {
        companyObject = await Company.findById(req.body.company);
        if (!companyObject) {
          return res.status(400).json({ message: 'Invalid company ID' });
        }
    }
    await employee.save();

    if (companyObject) {
        companyObject.employees.push(employee._id);
        await companyObject.save();  // Save the updated company
      }

    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    createEmployee,
    deleteEmployee
}
