const express = require('express');
const router = express.Router();
const Todo = require('../Todo');

// get all
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

//create
router.post('/', async (req, res) => {
  await Todo.create(req.body);
  res.redirect('/todos');
});

// get by id
router.get('/:id/edit', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.render('edit', { todo });
});

// update
router.put('/:id', async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/todos');
});

// delete
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/todos');
});

module.exports = router;
