const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT 
router.put('/:id/toggle', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE 
router.delete('/clear-completed', async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.json({ message: 'Completed todos cleared' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
