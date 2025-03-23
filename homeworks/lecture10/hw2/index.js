const express = require('express');
const mongoose = require('./connect');  // Import the MongoDB connection
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Define Todo model
const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes
app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).send('Error fetching todos');
  }
});

app.post('/api/todos', async (req, res) => {
  const { todo } = req.body;
  try {
    const newTodo = new Todo({
      todo: todo,
      done: false
    });
    await newTodo.save();
    res.json(await Todo.find());
  } catch (err) {
    res.status(500).send('Error creating todo');
  }
});

app.put('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Error updating todo');
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Todo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).send('Error deleting todo');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
