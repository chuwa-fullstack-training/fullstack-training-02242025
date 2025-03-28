const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.render('index', { todos });
});

// POST a new todo
router.post('/', async (req, res) => {
  const { title } = req.body;
  if (title.trim()) {
    await Todo.create({ title });
  }
  res.redirect('/');
});

// POST toggle completion
router.post('/toggle/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    await todo.save();
  }
  res.redirect('/');
});

// POST delete todo
router.post('/delete/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
