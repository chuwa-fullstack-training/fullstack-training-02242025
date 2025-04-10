const fs = require("fs");
const path = require("path");

const DIRECTORY = path.join(__dirname, "../demo/public"); // Directory to store files

// ✅ Get all files
exports.getAllFiles = (req, res) => {
  fs.readdir(DIRECTORY, (err, files) => {
    if (err) return res.status(500).json({ error: "Cannot read directory" });
    res.json({ files });
  });
};

// ✅ Get a specific file
exports.getFile = (req, res) => {
  const filePath = path.join(DIRECTORY, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }
  res.sendFile(filePath);
};

// ✅ Create a new file
exports.createFile = (req, res) => {
  const { filename, content } = req.body;
  if (!filename) return res.status(400).json({ error: "Filename is required" });

  const filePath = path.join(DIRECTORY, filename);
  fs.writeFile(filePath, content || "", (err) => {
    if (err) return res.status(500).json({ error: "Error creating file" });
    res.status(201).json({ message: "File created", filename });
  });
};

// ✅ Delete a file
exports.deleteFile = (req, res) => {
  const filePath = path.join(DIRECTORY, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).json({ error: "Error deleting file" });
    res.json({ message: "File deleted", filename: req.params.filename });
  });
};
