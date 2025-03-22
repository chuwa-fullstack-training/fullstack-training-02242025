const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your-secret-key";

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

/**
 * Middleware to authenticate JWT tokens.
 * If a token is present and valid, req.user is populated.
 */
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next();

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Invalid token format" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.user = decoded; // employee id and company id
    next();
  });
}

/**
 * Login API: POST /api/login
 * Expects JSON body with "username" and "password" (mapped to firstName and lastName)
 * If credentials are valid, returns a JWT token.
 */
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Here we use firstName as username and lastName as password for demonstration.
    const employee = await Employee.findOne({
      firstName: username,
      lastName: password,
    }).populate("company");

    if (!employee)
      return res.status(401).json({ error: "Invalid credentials" });

    // Create a token payload containing employee _id and company id
    const payload = {
      id: employee._id,
      company: employee.company ? employee.company._id : null,
      firstName: employee.firstName,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * Company APIs
 */

// Create a new company
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
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany)
      return res.status(404).json({ error: "Company not found" });
    res.json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all employees of a company
// Protected
app.get("/companies/:id/employees", authenticate, async (req, res) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ error: "Authentication required to access this resource" });
    }

    // Check
    if (req.user.company.toString() !== req.params.id) {
      return res
        .status(403)
        .json({
          error: "You are not authorized to access this company's employees",
        });
    }

    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });
    res.json(company.employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * Employee APIs
 */

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
// If the user is authenticated, return full details; otherwise, only firstName and lastName.
app.get("/employees", authenticate, async (req, res) => {
  try {
    let employees;
    if (req.user) {
      employees = await Employee.find().populate("company manager");
    } else {
      employees = await Employee.find({}, "firstName lastName");
    }
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get an employee by id
app.get("/employees/:id", authenticate, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate(
      "company manager"
    );
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    if (req.user) {
      res.json(employee);
    } else {
      res.json({
        firstName: employee.firstName,
        lastName: employee.lastName,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an employee by id
// protected
app.put("/employees/:id", authenticate, async (req, res) => {
  try {
    if (!req.user)
      return res.status(401).json({ error: "Authentication required" });

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
// protected
app.delete("/employees/:id", authenticate, async (req, res) => {
  try {
    if (!req.user)
      return res.status(401).json({ error: "Authentication required" });

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
