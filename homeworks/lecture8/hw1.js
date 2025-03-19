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

const fileRouter = express.Router();
const timeRouter = express.Router();

fileRouter.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, req.params.dir);
    let extension = req.params.ext.trim();

    extension = extension.startsWith('.') ? extension : `.${extension}`;

    if (!req.params.dir || !req.params.ext) {
        return res.status(400).json({ error: "Wrong file directory. "});
    }

    fs.readdir(directory, (err, files) => {
        if (err) {
            return res.status(400).json({ error: `Error reading directory '${req.params.dir}': ${err.message}` });
        }
    
        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.json(filteredFiles);
    })
})

timeRouter.get('/parsetime', (req, res) => {
    const isoTime = req.query.iso;
    
    if (!isoTime) {
        return res.status(400).json({ error: "Missing iso query" });
    }

    const date = new Date(isoTime);
    if (isNaN(date.getTime())) {
        return res.status(400).json({ error: "Invalid iso date format" });
    }

    res.json({
        "hour": date.getUTCHours(),
        "minute": date.getUTCMinutes(),
        "second": date.getUTCSeconds()
    });
})

timeRouter.get('/unixtime', (req, res) => {
    const isoTime = req.query.iso;
    
    if (!isoTime) {
        return res.status(400).json({ error: "Missing iso query" });
    }

    const date = new Date(isoTime);
    if (isNaN(date.getTime())) {
        return res.status(400).json({ error: "Invalid iso date format" });
    }

    res.json({
        "unixtime": date.getTime()
    });
})

app.use('/hw1', fileRouter);
app.use('/api', timeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
