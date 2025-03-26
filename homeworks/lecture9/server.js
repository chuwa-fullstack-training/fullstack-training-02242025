const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const companyRoutes = require('./routes/companyRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use(companyRoutes);
app.use(employeeRoutes);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then
