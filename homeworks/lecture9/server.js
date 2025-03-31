const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://mongodb:27017/companydb', {
      serverSelectionTimeoutMS: 10000
    });

    console.log('✅ Connected to MongoDB');

    // ✅ 成功连接后再加载路由（这一步很关键！）
    const companyRoutes = require('./employee-company-api/routes/companies');
    const employeeRoutes = require('./employee-company-api/routes/employees');

    app.use('/api/companies', companyRoutes);
    app.use('/api/employees', employeeRoutes);

    app.listen(3000, () => {
      console.log('🚀 Server is running at http://localhost:3000');
    });

  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    setTimeout(() => process.exit(1), 10000);
  }
};

startServer();
