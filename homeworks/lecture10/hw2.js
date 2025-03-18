const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const port = processs.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/todoAppDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", TodoSchema);

app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Get list all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    if (req.accepts("html")) {
      res.render("index", { todos });
    } else {
      res.json(todos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get form to creat a new todo
app.get("/todos/new", async (req, res) => {
  res.render("new");
});

//Post creat a new todo
app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.redirect("/todos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get show details for a single to through id
app.get("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    if (req.accepts("html")) {
      res.render("show", { todo });
    } else {
      res.json(todo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get form to edit an existing todo
app.get("/todos/:id/edit", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.render("edit", { todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Put update an existing todo
app.put("/todos/:id", async (req, res) => {
  try {
    req.body.completed =
      req.body.completed === "true" || req.body.completed === "on";
    await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/todos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect("/todos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
