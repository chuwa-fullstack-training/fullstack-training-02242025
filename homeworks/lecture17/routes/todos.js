const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST
router.post('/', async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

// PUT toggle
router.put('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});

// DELETE completed
router.delete('/completed', async (req, res) => {
  await Todo.deleteMany({ done: true });
  res.json({ success: true });
});

module.exports = router;
