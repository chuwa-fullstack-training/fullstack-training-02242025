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
const path = require('path');
const fs = require('fs');
const url = require('url');

const app = express();

// HW1 Router
app.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, dir);  

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading directory', details: err });
    }

    const filteredFiles = files.filter(file => path.extname(file) === '.' + ext);

    res.json(filteredFiles);
  });
});

// HW2 Router
app.get('/hw2/parsetime', (req, res) => {
  const { iso } = req.query;

  if (iso) {
    const isoDate = new Date(iso);
    
    if (isoDate.toString() === 'Invalid Date') {
      res.status(400).json({ error: 'Invalid ISO date' });
    } else {
      const time = {
        hour: isoDate.getHours(),
        minute: isoDate.getMinutes(),
        second: isoDate.getSeconds()
      };
      res.json(time);
    }
  } else {
    res.status(400).json({ error: 'ISO date parameter is required' });
  }
});

app.get('/hw2/unixtime', (req, res) => {
  const { iso } = req.query;

  if (iso) {
    const isoDate = new Date(iso);
    
    if (isoDate.toString() === 'Invalid Date') {
      res.status(400).json({ error: 'Invalid ISO date' });
    } else {
      const unixTime = {
        unixtime: isoDate.getTime()
      };
      res.json(unixTime);
    }
  } else {
    res.status(400).json({ error: 'ISO date parameter is required' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});