const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");

// Login controller
exports.login = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      return res
        .status(400)
        .json({ message: "First name and last name are required" });
    }

    // Find the employee in the database
    const employee = await Employee.findOne({ firstName, lastName });

    // Check if employee exists
    if (!employee) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token with employee info
    const token = jwt.sign(
      {
        employeeId: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        companyId: employee.company,
      },
      process.env.JWT_SECRET || "your-secret-key", // Use environment variable in production
      { expiresIn: "1h" }
    );

    // Return the token
    res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login" });
  }
};
