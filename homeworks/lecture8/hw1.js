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

const app = express();

const hw1Router = express.Router();

hw1Router.get("/:dir/:ext", (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, dir);
  const extensionFilter = "." + ext;

  fs.readdir(directoryPath, (err, list) => {
    if (err) {
      return res.status(500).send("Error reading directory: " + err.message);
    }

    const filtered = list.filter(
      (file) => path.extname(file) === extensionFilter
    );

    res.type("text/plain").send(filtered.join("\n"));
  });
});

app.use("/hw1", hw1Router);

const hw2Router = express.Router();

hw2Router.get("/api/parsetime", (req, res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).json({ error: "iso query parameter is required" });
  }
  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.json(result);
});

hw2Router.get("/api/unixtime", (req, res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).json({ error: "iso query parameter is required" });
  }
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime(),
  };
  res.json(result);
});

app.use(hw2Router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
