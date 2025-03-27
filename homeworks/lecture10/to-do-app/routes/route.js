const express = require('express');
const router = express.Router();
const Todo = require('../models/task');


router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.render('index', { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


router.post('/todos', async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


router.get('/todos/:id/edit', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.render('edit', { todo });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// PUT update todo
router.put('/todos/:id', async (req, res) => {
  try {
    const { title, completed } = req.body;
    await Todo.findByIdAndUpdate(req.params.id, { 
      title, 
      completed: completed === 'on'
    });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;