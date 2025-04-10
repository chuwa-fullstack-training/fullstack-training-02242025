const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/todolist');

app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
