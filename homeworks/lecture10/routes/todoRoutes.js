const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController"); // ✅ Ensure correct import

// ✅ Ensure controllers are properly imported
if (
  !todoController.getTodos ||
  !todoController.createTodo ||
  !todoController.getTodo ||
  !todoController.updateTodo ||
  !todoController.deleteTodo
) {
  throw new Error(
    "One or more route handlers are undefined. Check `todoController.js`."
  );
}

// ✅ Define routes properly
router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);
router.get("/:id", todoController.getTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

// ✅ Export the router correctly
module.exports = router;
