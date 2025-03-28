const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();

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

  
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const todoRoutes = require('./routes/todoRoutes');

app.use('/api/todos', todoRoutes);

app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
