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
const app = express();

// Set the view engine to Pug
app.set("view engine", "pug");

// Define routes for hw1 and hw2
const hw1Router = express.Router();
const hw2Router = express.Router();

// hw1 route to handle requests with URL params
hw1Router.get("/:dir/:ext", (req, res) => {
  const { dir, ext } = req.params;
  const fs = require("fs");
  const path = require("path");

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).send("Error reading directory");
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file).slice(1) === ext
    );

    res.send(`<html>
      <head><title>Filtered Files</title></head>
      <body>
        <h1>Files with extension .${ext}</h1>
        <ul>
          ${filteredFiles.map((file) => `<li>${file}</li>`).join("")}
        </ul>
      </body>
    </html>`);
  });
});

// hw2 route to handle requests with query strings
hw2Router.get("/api/parsetime", (req, res) => {
  const isoTime = req.query.iso;
  const date = new Date(isoTime);

  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
});

hw2Router.get("/api/unixtime", (req, res) => {
  const isoTime = req.query.iso;
  const date = new Date(isoTime);

  res.json({
    unixtime: date.getTime(),
  });
});

// Mount the routers
app.use("/hw1", hw1Router);
app.use("/hw2", hw2Router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
