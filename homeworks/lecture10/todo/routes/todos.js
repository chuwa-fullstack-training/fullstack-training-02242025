// backend/routes/todos.js
const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET
router.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST
router.post("/api/todos", async (req, res) => {
  const newTodo = new Todo({ task: req.body.task });
  await newTodo.save();
  res.json(newTodo);
});

// PATCH (toggle)
router.patch("/api/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE (optional)
router.delete("/api/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
