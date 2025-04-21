/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

const fs = require('fs');
const path = require('path');

let dir = process.argv[2];
let ext = '.' + process.argv[3];

if (!dir || !ext || ext === '.') {
  dir = __dirname;
  ext = '.js';
}

console.log("查找目录：", dir);
console.log("查找扩展名：", ext);

function printFiles(p = __dirname, extension = '.js') {
  fs.readdir(p, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      if (path.extname(file) === extension) {
        console.log(file);
      }
    });
  });
}

printFiles(dir, ext);
