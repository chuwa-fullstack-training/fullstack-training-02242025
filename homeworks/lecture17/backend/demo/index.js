const express = require("express");
// const mongoose = require("mongoose");
const todoRoutes = require("../routes/todoRoutes"); // ✅ Import Correctly
const path = require("path");

const app = express();
const PORT = 3001;

// ✅ Connect to MongoDB
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sr5553:NAKZGbt9MwoqVCFm@cluster0.rph2b.mongodb.net/todoDB?retryWrites=true&w=majority"
  )

  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// ✅ Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Set Pug as Template Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// ✅ Use todoRoutes correctly
app.use("/api/todos", todoRoutes); // Ensure `todoRoutes` is imported correctly

app.listen(PORT, () =>
  console.log(`Todo App running at http://localhost:${PORT}`)
);
