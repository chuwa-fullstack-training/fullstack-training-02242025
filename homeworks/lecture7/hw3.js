/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/home.html') {
    fs.readFile('home.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

  } else if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const formData = querystring.parse(body); // { name: 'John', age: '20' }
      const query = querystring.stringify(formData);

      res.statusCode = 302;
      res.setHeader('Location', `/home.html?${query}`);
      res.end();
    });

  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(8000, () => {
  console.log('Server is running at http://localhost:8000/home.html');
});
