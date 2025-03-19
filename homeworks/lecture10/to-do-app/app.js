const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

mongoose
    .connect(process.env.DB_URL)
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error)=> console.error('MongoDb connection error:', error));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('./todos', todoRoutes);