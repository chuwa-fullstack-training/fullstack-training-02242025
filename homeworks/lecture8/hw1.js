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

/**
 * hw1: return files with given extension from given directory (1-level down)
 * Example: http://localhost:3000/hw1/test/txt
 */
app.get('/hw1/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    const baseDir = path.join(__dirname, dir);

    fs.readdir(baseDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Cannot read directory' });
        }
        const matchedFiles = files.filter(file => path.extname(file).slice(1) === ext);
        res.json({ files: matchedFiles });
    });
});

/**
 * hw2: return parsed time or unix timestamp from query string
 * Example:
 *   /hw2/api/parsetime?iso=2023-05-22T12:34:56.789Z
 *   /hw2/api/unixtime?iso=2023-05-22T12:34:56.789Z
 */
app.get('/hw2/api/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        return res.status(400).json({ error: 'Missing "iso" query parameter' });
    }

    const date = new Date(iso);
    res.json({
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
    });
});

app.get('/hw2/api/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        return res.status(400).json({ error: 'Missing "iso" query parameter' });
    }

    const date = new Date(iso);
    res.json({
        unixtime: date.getTime(),
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});