const express = require('express');
const connectDB = require('./db');
const path = require('path');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Set views directory
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

connectDB();

app.use('/api', todoRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Todo List App!'); // 或者渲染 EJS 模板
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});