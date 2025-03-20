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

const express = require('express')
const fs = require('fs');
const path = require('path')

const app = express();
const PORT = 3000;

const hw1Router = express.Router();
const hw2Router = express.Router()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
hw1Router.get('/:dir/:ext', (req, res) => {
    const {dir, ext} = req.params
    const dirPath = path.join(__dirname, dir)

    fs.readdir(dirPath, (err, files)=>{
        if(err){
            return res.status(500).send('Error when reading directory')
        }
        const filteredFiles = files.filter(file => {
            return path.extname(file).slice(1) === ext
        })
        res.json({
            directory : dir,
            extension : ext,
            files : filteredFiles
        })
    })
})

hw2Router.get('/:type', (req, res) => {
    const { type } = req.params;
    const iso = req.query.iso

    if (!iso) {
        return res.status(400).send('Missing iso')
    };

    const date = new Date(iso)

    let result

    if(type === 'parsetime'){
        try{
            result = {
                hour: date.getUTCHours(),
                minute: date.getUTCMinutes(),
                second: date.getUTCSeconds()
            }
        }catch(err){
            res.status(400).send('Cannot read date')
        }
        
    }else if(type === 'unixtime'){
        try{
            result = {
                unixtime : date.getTime()
            }
        }catch(err){
            res.status(400).send('Cannot read date')
        }
    }else{
        res.status(400).send('Wrong request time type')
    }

    res.json(result)
})

app.use('/hw1', hw1Router);
app.use('/api', hw2Router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))