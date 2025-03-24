const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt"); // ✅ Use expressjwt instead of expressJwt

require("dotenv").config();

const companyRoutes = require("./routes/companyRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Use environment variable for security

// Middleware
app.use(bodyParser.json());

// ✅ Apply JWT Authentication Middleware
app.use(
  expressJwt({ secret: SECRET_KEY, algorithms: ["HS256"] }).unless({
    path: ["/api/login"], // Allow login without authentication
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api", authRoutes); // ✅ Add Authentication Routes

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
