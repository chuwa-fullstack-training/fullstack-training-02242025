const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).send('Error fetching todos');
  }
});

// POST a new todo
router.post('/add', async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.redirect('/');
  }

  try {
    const newTodo = new Todo({
      title: title,
      completed: false,
    });

    await newTodo.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error creating todo');
  }
});

// Update a todo
router.post('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    await Todo.findByIdAndUpdate(id, { completed });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error updating todo');
  }
});

// Delete a todo
router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting todo');
  }
});

module.exports = router;
