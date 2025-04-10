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

server.js
const express = require('express');
const app = express();
const hw1Router = require('./Router1');
const hw2Router = require('./Router2');

app.use('/r1', Router1);
app.use('/api', Router2);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


Router1.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const targetDir = path.join(__dirname, dir);

  // Only allow one-level directory check
  if (dir.includes('/') || ext.includes('/')) {
    return res.status(400).send('Nested directories not supported');
  }

  fs.readdir(targetDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Cannot read directory' });
    }

    const filtered = files.filter(file => path.extname(file) === `.${ext}`);
    res.json(filtered);
  });
});

module.exports = router;

Router2.js
const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
  const iso = req.query.iso;
  if (!iso) return res.status(400).json({ error: 'Missing iso parameter' });

  const date = new Date(iso);
  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  });
});

router.get('/unixtime', (req, res) => {
  const iso = req.query.iso;
  if (!iso) return res.status(400).json({ error: 'Missing iso parameter' });

  const date = new Date(iso);
  res.json({ unixtime: date.getTime() });
});

module.exports = router;
