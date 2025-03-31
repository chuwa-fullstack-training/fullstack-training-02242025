const express = require('express');
const mongoose = require('mongoose');
const app = express();

const companyRoutes = require('./routes/companies');
const employeeRoutes = require('./routes/employees');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeesdb')
  .then(() => console.log('MongoDB connected'));

// Middleware
app.use(express.json());

// Routes
app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
