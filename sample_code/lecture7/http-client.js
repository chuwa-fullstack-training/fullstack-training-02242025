const http = require('http');


//res.on() in the Client (http.get) → Handling Incoming Data

function requestJSON(url, callback) {
  http.get(url, res => {
    let data = '';
    res.on('data', chunk => { //on is looking for something to happen
      data += chunk;  //'data' – Fired when a chunk of data is received.
    });
    res.on('end', () => {
      callback(JSON.parse(data));
    });
  });
}

requestJSON('http://localhost:3000', data => {
  console.log(data);
});
