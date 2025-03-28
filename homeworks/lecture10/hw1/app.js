const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express')
const app = express()
const port = 1125
const companyRoutes = require('./routes/companyRoutes')
const employeeRoutes = require('./routes/employeeRoutes')

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(express.json())
app.use('/company', companyRoutes)
app.use('/employee', employeeRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})