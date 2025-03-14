const express = require('express');
const connectDB = require('./config/db');
const companyRoutes = require('./routes/companyRoutes');
const employeeRoutes= require('./routes/employeeRoutes');

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use('/api/companies', companyRoutes);
app.use('api/employees', employeeRoutes);

app.listen(port, ()=> console.log(``));