const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/', todoController.getToDoList);
router.post('/', todoController.createToDo);
router.put('/:id', todoController.editToDo);

module.exports = router;