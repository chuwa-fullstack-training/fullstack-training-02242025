const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./Controller');
const authMiddleware = require('../authMiddleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', apiRoutes);

mongoose.connect('{mongodbUrl}', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));