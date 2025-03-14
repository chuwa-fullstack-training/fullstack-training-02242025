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
const PATH_PREFIX = `/home/hongji/Documents/fullstack-training-02242025/homeworks/lecture7`;


app.get('/api/files/:dir/:extension', (req, res)=>{
    const dir = req.params.dir;
    const extension = req.params.extension;

    if( !dir || !extension){
        return res.status(400).json({error: `Missing directory or extension parameter`});
    }

    const formattedDir = path.join(PATH_PREFIX, `${dir}`);

    try {
        fs.readdir(formattedDir, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err.message);
                process.exit(1);
            }
            const filteredFiles = files.filter(file => path.extname(file) === ext);
            return res.status(200).json({file: filteredFiles});
        });
    } catch (error) {
        console.error('Error in reading redirectory: ', error.message);
        return res.status(400).json({error: 'Failed to read directory'});
    }

});


app.get('/api/parsetime', (req, res)=>{
    const iso = req.query.iso;
    if(!iso){
        return res.status(400).json({error: `Missing iso parameter.`});
    }
    const date = new Date(iso);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return res.status(200).json({result: {
        hours: hours,
        minutes, minutes,
        seconds, seconds,
    }});
});


app.get('/api/unixtime', (res, req)=>{
    const iso = req.query.iso;
    if(!iso){
        return res.status(400).json({error: `Missing iso parameter.`});
    }
    const date = new Date(iso);
    return res.status(200).json({result: `${date.getTime()}`})
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server runnong on port ${PORT}`);
});