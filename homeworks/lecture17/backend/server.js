// server.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const todoRoutes = require("./routes/todoRoutes"); // ✅ 注意路径

const app = express();
const PORT = 3001;

// ✅ Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://sr5553:3IVPLzBtLRd1vlhQ@cluster0.rph2b.mongodb.net/todoDB?retryWrites=true&w=majority"
  )

  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// ✅ Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Set view engine if needed
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// ✅ API routes
app.use("/api/todos", todoRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Todo App running at http://localhost:${PORT}`);
});
