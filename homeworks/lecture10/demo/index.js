// demo/index.js（
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const todoRoutes = require('./routes/todo'); 

dotenv.config(); //.env MongoDB

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB error", err));

  app.use('/', todoRoutes);

app.listen(3000, () => {
  console.log('Todo app listening at http://localhost:3000');
});
