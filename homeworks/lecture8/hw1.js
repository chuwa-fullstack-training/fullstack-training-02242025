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
const app = express();
const fs = require('fs');
const path = require('path');

// console.log(__dirname)
//  /home/yinjiao/chuwa/fullstack-training-02242025/homeworks/lecture8/hw1
// const baseDir = path.join(__dirname, "test");
// console.log(baseDir)
///home/yinjiao/chuwa/fullstack-training-02242025/homeworks/lecture8/test


app.get('/hw1/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    const baseDir = path.join(__dirname, dir);
    let rsl = []
    //fs.readdiris async
    fs.readdir(baseDir, (err, data) => {
        if(err) {
            return res.status(500).json({ error: 'Unable to read directory' });
        } else {
            data.forEach(file => {
                const fileExtension = path.extname(file).slice(1);
                if(fileExtension === ext) {
                    rsl.push(file)
                }
            })
        }
        res.json({ files: rsl });
    })
    //res.json( filteredFiles ); wrong ensure response is sent inside the callback
    // {
    //     "files": ["example.txt", "test.txt"]
    //   }
});


app.get('/hw2/api/parsetime', (req, res) => {
    const isoTime = req.query.iso
    if (!isoTime) {
        return res.status(400).json({ error: "Missing 'iso' query parameter" });
    }

    const date = new Date(isoTime);
    const response = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
    }

    res.json(response)
})


app.get('/hw2/api/unixtime', (req, res) => {
    const isoTime = req.query.iso
    if (!isoTime) {
        return res.status(400).json({ error: "Missing 'iso' query parameter" });
    }
    const date = new Date(isoTime);
    const response = {
        unixtime: date.getTime()
    };

    res.json(response)
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
