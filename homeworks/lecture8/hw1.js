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
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// HW1: list files by extension
app.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, dir);
  const extension = '.' + ext;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(404).json({ error: 'Directory not found' });
    }

    const filtered = files.filter(file => path.extname(file) === extension);
    res.json(filtered);
  });
});

// HW2: /api/parsetime?iso=...
app.get('/api/parsetime', (req, res) => {
  const { iso } = req.query;

  if (!iso) {
    return res.status(400).json({ error: 'Missing iso parameter' });
  }

  const date = new Date(iso);

  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  });
});

// HW2: /api/unixtime?iso=...
app.get('/api/unixtime', (req, res) => {
  const { iso } = req.query;

  if (!iso) {
    return res.status(400).json({ error: 'Missing iso parameter' });
  }

  const date = new Date(iso);

  res.json({
    unixtime: date.getTime()
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
