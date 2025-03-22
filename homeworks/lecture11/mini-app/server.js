const express = require('express');
const connectDB = require('./config/db');
const companyRoutes = require('./routes/companyRoutes');
const employeeRoutes= require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "";

connectDB();

app.use(express.json());
app.use('/api/companies', companyRoutes);
app.use('api/employees', employeeRoutes);
app.use('/api/sessions', userRoutes);


app.listen(port, ()=> console.log(``));