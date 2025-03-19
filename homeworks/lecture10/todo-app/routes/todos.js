const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todos");

// GET all todos
router.get("/", todoController.getAllTodos);

// GET form to create a new todo
router.get("/new", todoController.getNewTodoForm);

// POST create a new todo
router.post("/", todoController.createTodo);

// GET single todo
router.get("/:id", todoController.getTodoById);

// PUT update todo
router.put("/:id", todoController.updateTodo);

// DELETE a todo
router.delete("/:id", todoController.deleteTodo);

// PATCH toggle todo status
router.patch("/:id/toggle", todoController.toggleTodoStatus);

module.exports = router;
