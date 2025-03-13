const http = require('http');
const PORT = 3000;

//res.on() in the Server (http.createServer) → Handling Outgoing Data
//req in the Server (http.createServer) – Handling Incoming Data

const server = http.createServer((req, res) => { //callback will be invoke when request comes in
  res.end(JSON.stringify({ message: 'Hello World' }));
  //end method allows you to add to the body and send the response inmmediatly
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
