require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const DB_PASSWORD = encodeURIComponent(process.env.MONGODB_PASSWORD || '');
const DB_NAME = 'companyDB';

mongoose.connect(`mongodb+srv://mandali8686:${DB_PASSWORD}@cluster0.ia9fboh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Connection error:', err));

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

app.use('/companies', companyRoutes);
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
