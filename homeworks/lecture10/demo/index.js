const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Todo = require('./models/Todo');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp').then(() => console.log('MongoDB connected'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', async (req, res) => {
  const todos = await Todo.find().lean();
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  const todo = new Todo({ todo: req.body.todo });
  await todo.save();
  res.json(todo);
});

app.put('/api/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
