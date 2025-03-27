const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:ext', (req, res)=>{
    const { dir, ext } = req.params;
    if (dir.includes('..') || dir.includes('/')){
        return res.status(400).send('Invalid Directory');
    }

    const directoryPath = path.join(__dirname, dir);

    fs.readdir(directoryPath, (err, files) =>{
        if (err) {
            return res.status(404).send(`Error reading directory: ${err.message}`);
          }
      
          const targetExt = ext.startsWith('.') ? ext.toLowerCase() : `.${ext.toLowerCase()}`;
          const filteredFiles = files.filter(file => 
            path.extname(file).toLowerCase() === targetExt
          );
          res.json({
            directory: dir,
            extension: ext,
            files: filteredFiles
          });
    });
});

module.exports = router;
