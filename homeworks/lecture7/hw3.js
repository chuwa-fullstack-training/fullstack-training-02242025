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
const path = require('path');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === 'GET') {
    if (url === '/') {
      res.end('This is the home page');
    } else if (url === '/about') {
      res.end('This is the about page');
    } else if (url.startsWith('/home.html')) {
      fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error loading page');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        }
      });
    } else {
      res.statusCode = 404;
      res.end('This is the 404 page');
    }
  } else if (method === 'POST') {
    if (url === '/create-post') {
      let body = [];

      req.on('data', chunk => {
        body.push(chunk);
      });

      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const formData = querystring.parse(parsedBody);
        const query = querystring.stringify(formData);

        // Redirect with query string to home.html
        res.statusCode = 302;
        res.setHeader('Location', `/home.html?${query}`);
        res.end();
      });
    } else {
      res.statusCode = 404;
      res.end('This is the 404 page');
    }
  } else {
    res.statusCode = 405;
    res.end('Unsupported method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
