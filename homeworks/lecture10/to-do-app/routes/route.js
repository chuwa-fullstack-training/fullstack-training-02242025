const express = require('express');
const router = express.Router();
const Todo = require('../models/task');

// router.get('/api/todos', async (req, res) => {
//     try {
//       const todos = await Todo.find().sort({ createdAt: -1 });
//       console.log("Todo list",todos);
//       res.json(todos);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server Error' });
//     }
//   });

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.render('index', { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/todos', async (req, res) => {  
  try {
    const { todo: title } = req.body;  
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.json({
      _id: newTodo._id,
      title: newTodo.title,
      completed: newTodo.completed
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});


router.put('/api/todos/:id', async (req, res) => {  
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    todo.completed = !todo.completed;
    await todo.save();
    
    res.json({
      _id: todo._id,
      completed: todo.completed
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
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

module.exports = router;