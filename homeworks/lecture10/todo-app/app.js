const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/todoDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));
  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const todoRoutes = require('./routes/todo');
app.use('/', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));