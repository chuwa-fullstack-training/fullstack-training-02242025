const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const path = require("path");
const Todo = require("./models/Todo");

const connectDB = require("./db");
const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Set template engine
app.set("view engine", "pug");
app.set("views", "./views");

// Routes
app.use("/api/todos", require("./routes/todos"));

// Import todo controller for direct use in routes
const todoController = require("./controllers/todos");

// Home route
app.get("/home.html", todoController.getAllTodos);

// Root route and /todos route - redirect to home
app.get("/", todoController.getAllTodos);

app.get("/todos", todoController.getAllTodos);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
