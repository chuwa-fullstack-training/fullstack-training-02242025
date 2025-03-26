const express = require('express');
const {
    getAllTodoList,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    updateCompaleteStatus
} = require('../controllers/todo')

const router = express.Router();

router.get('/todos', getAllTodoList);

router.get('/todos/:id', getOneTodo);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

router.put('/todos/complete/:id', updateCompaleteStatus);

module.exports = router;