const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');

const authRoutes = require('./routers/auth');
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
app.use('/auth', authRoutes);
app.use('/api', companyRoutes);
app.use('/api', employeeRoutes);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.statusCode = 404;
    next(err);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
