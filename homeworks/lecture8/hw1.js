/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/:dir/:ext", (req, res) => {
  const dir = req.params.dir;
  const ext = `.${req.params.ext}`;
  const dirPath = path.join(__dirname, dir);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(400).json({ error: "Invalid directory" });
    }
    const filteredFiles = files.filter((file) => path.extname(file) === ext);
    res.json(filteredFiles);
  });
});

module.exports = router; // ✅ Ensure it's exporting the router, NOT an object!
