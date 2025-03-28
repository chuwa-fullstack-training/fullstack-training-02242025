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
const PORT = 3000;

// Homework1 Router
app.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const targetDir = path.join(__dirname, dir);

  fs.readdir(targetDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: `${err.message}` });
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
    res.json(filteredFiles);
  });
});

// Homework2 Router
app.get('/api/parsetime', (req, res) => {
  const { iso } = req.query;
  if (!iso) {
    return res.status(400).json({ error:'Invalid API endpoint'});
  }

  const date = new Date(iso);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: 'Invalid ISO date format' });
  }

  res.json({
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  });
});

app.get('/api/unixtime', (req, res) => {
  const { iso } = req.query;
  if (!iso) {
    return res.status(400).json({ error: 'Invalid API endpoint' });
  }

  const date = new Date(iso);
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: 'Invalid ISO date format' });
  }

  res.json({ unixtime: date.getTime() });
});

// ---------- 启动服务器 ----------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
