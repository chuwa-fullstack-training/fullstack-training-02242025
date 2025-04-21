// demo/routes/todo.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

// Create a new todo
router.post('/', async (req, res) => {
  const { title } = req.body;
  await Todo.create({ title });
  res.redirect('/');
});

// Toggle completion
router.post('/toggle/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.redirect('/');
});

// Delete a todo
router.post('/delete/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
