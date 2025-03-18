const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/companyEmployeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: "Company" },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: "Employee", default: null },
});

const CompanySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
});

const Company = mongoose.model("Company", CompanySchema);
const Employee = mongoose.model("Employee", EmployeeSchema);

const app = express();
app.use(bodyParser.json());

// Create
app.post("/companies", async (req, res) => {
  try {
    const company = new Company(req.body);
    const savedCompany = await company.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all companies
app.get("/companies", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a company by id
app.get("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a company by id
app.put("/companies/:id", async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCompany)
      return res.status(404).json({ error: "Company not found" });
    res.json(updatedCompany);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a company by id
app.delete("/companies/:id", async (req, res) => {
  try {
    // Optionally, you may want to also remove employees associated with the company.
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany)
      return res.status(404).json({ error: "Company not found" });
    res.json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all employees of a company
app.get("/companies/:id/employees", async (req, res) => {
  try {
    // Option 1: Using populate from Company
    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company.employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new employee
app.post("/employees", async (req, res) => {
  try {
    const employeeData = req.body;
    const employee = new Employee(employeeData);
    const savedEmployee = await employee.save();

    if (employee.company) {
      await Company.findByIdAndUpdate(employee.company, {
        $push: { employees: savedEmployee._id },
      });
    }

    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find().populate("company manager");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get an employee by id
app.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate(
      "company manager"
    );
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an employee by id
app.put("/employees/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee)
      return res.status(404).json({ error: "Employee not found" });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an employee by id
app.delete("/employees/:id", async (req, res) => {
  try {
    const employeeToDelete = await Employee.findById(req.params.id);
    if (!employeeToDelete)
      return res.status(404).json({ error: "Employee not found" });

    if (employeeToDelete.company) {
      await Company.findByIdAndUpdate(employeeToDelete.company, {
        $pull: { employees: employeeToDelete._id },
      });
    }

    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
