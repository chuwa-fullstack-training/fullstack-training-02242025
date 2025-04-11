const express = require('express');
const toDoListR = express.Router();

const {createToDo,getToDo,updateToDo} = require('../controllers/toDoList');

//Create
toDoListR.post('/api/todos', createToDo);

//Get
toDoListR.get('/api', getToDo);

//Update
toDoListR.put('/api/todolists/:id', updateToDo);

module.exports = toDoListR;
