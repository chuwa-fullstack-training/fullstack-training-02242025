const express = require("express");
const {
  getAllFiles,
  getFile,
  createFile,
  deleteFile,
} = require("../controllers/fileController");

const router = express.Router();

// GET: List all files
router.get("/", getAllFiles);

// GET: Retrieve a specific file
router.get("/:filename", getFile);

// POST: Create a new file
router.post("/", createFile);

// DELETE: Remove a file
router.delete("/:filename", deleteFile);

module.exports = router;
