const Todo = require("../models/Todo");

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    // Map todos to format expected by the pug template
    const formattedTodos = todos.map((todo) => ({
      id: todo._id,
      todo: todo.title,
      done: todo.status === "completed",
    }));

    res.render("index", { todos: formattedTodos });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Show form to create a new todo
exports.getNewTodoForm = (req, res) => {
  res.render("todos/create");
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.todo,
      description: req.body.description,
      priority: req.body.priority,
      dueDate: req.body.dueDate,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get a single todo
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    res.render("todos/edit", { todo });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // Check if this is a toggle request from the frontend (PUT without body)
    if (Object.keys(req.body).length === 0) {
      todo.status = todo.status === "pending" ? "completed" : "pending";
    } else {
      // Regular update with full data
      todo.title = req.body.title || todo.title;
      todo.description = req.body.description;
      todo.status = req.body.status || todo.status;
      todo.priority = req.body.priority || todo.priority;
      todo.dueDate = req.body.dueDate;
    }

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ success: true, message: "Todo deleted successfully" });
  } catch (err) {
    console.warn(err);
    res.status(500).json({ error: "Server Error" });
  }
};

// Toggle todo status
exports.toggleTodoStatus = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.status = todo.status === "pending" ? "completed" : "pending";
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    console.warn(err);
    res.status(500).json({ error: "Server Error" });
  }
};
