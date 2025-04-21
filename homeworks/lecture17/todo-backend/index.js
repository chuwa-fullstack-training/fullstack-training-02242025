const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const todoRoutes = require('./routes/todo');
const cors = require('cors'); 

            

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB error", err));

app.get('/', (req, res) => {
  res.send('Todo Backend API is running! 🎉');
});


app.use('/todos', todoRoutes);

app.listen(3000, () => {
  console.log('Todo app listening at http://localhost:3000');
});

