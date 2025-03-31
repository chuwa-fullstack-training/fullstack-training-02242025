const express = require('express');
const mongoose = require('mongoose');
const companyRoutes = require('./routes/companies');
const employeeRoutes = require('./routes/employees');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeesdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
