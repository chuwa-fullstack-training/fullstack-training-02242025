const express = require('express');
const mongoose = require('./connect');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);

app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

app.post('/api/todos', async (req, res) => {
  const { todo } = req.body;
  if (!todo || !todo.trim()) {
    return res.status(400).json({ error: 'Todo cannot be empty' });
  }
  
  try {
    const newTodo = new Todo({ todo: todo.trim(), done: false });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'Error creating todo' });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Error updating todo' });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

app.put('/api/todos/check/all', async (req, res) => {
  try {
    await Todo.updateMany({ done: false }, { $set: { done: true } });
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Error checking all todos' });
  }
});

app.put('/api/todos/clear/all', async (req, res) => {
  try {
    await Todo.updateMany({ done: true }, { $set: { done: false } });
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Error clearing all todos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});