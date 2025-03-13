const { log } = require('console');
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'demo.txt');
// log('start');
// async

// fs.writeFile(fileName, 'Hello World', callback):
// The fs.writeFile function in Node.js is asynchronous when used with a callback.
// It writes the data 'Hello World' to the file specified by fileName.
// However, this operation is non-blocking, meaning it does not stop or "pause" the program execution
// while it completes the task. It returns control to the next line of code immediately.
//when file was wriiten then it will call the call back

fs.writeFile(fileName, 'Hello World', err => {
  if (err) {
    throw err;
  } else {
    log('The file has been saved!');
  }
});
// log('after write');

fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  } else {
    log(data);
  }
});

// sync
try {
  fs.writeFileSync(fileName, 'Hello World');

  let result = fs.readFileSync(fileName, { encoding: 'utf8' });
  log('reaf file sync', result);
  log('end');
} catch (err) {
  console.log(err.message);
}
