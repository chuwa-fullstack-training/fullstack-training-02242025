const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');

const companyRoutes = require('./routers/companyRoute');
const employeeRoutes = require('./routers/employeeRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
app.use('/api', companyRoutes);
app.use('/api', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
