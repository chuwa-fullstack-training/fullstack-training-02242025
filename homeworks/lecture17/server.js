const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoute = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todosRoute);

mongoose.connect('mongodb://localhost:27017/todoapp')
  .then(() => {
    app.listen(4000, () => console.log('Server on http://localhost:4000'));
  });
