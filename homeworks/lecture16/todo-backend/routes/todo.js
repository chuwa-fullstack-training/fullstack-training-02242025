const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json({ todos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new todo
router.post('/todos', async (req, res) => {
  try {
    const todo = new Todo({ title: req.body.title });
    const saved = await todo.save();
    res.json({ todo: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST toggle todo completion
router.post('/todos/:id/update', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Not found' });
    todo.completed = !todo.completed;
    const saved = await todo.save();
    res.json({ todo: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST delete todo
router.post('/todos/:id/delete', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
