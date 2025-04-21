const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee');
const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/companies', companyRoutes);
app.use('/api/employees', employeeRoutes);
// MongoDB connect
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Placeholder route
app.get('/', (req, res) => {
  res.send('Employee API running!');
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

