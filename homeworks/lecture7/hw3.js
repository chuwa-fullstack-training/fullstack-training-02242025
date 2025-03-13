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
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === 'GET') {
    // serve home.html and include query parameters if present
    if (pathname === '/home.html' || pathname === '/') {
      fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }

        // extract query parameters (name & age)
        const { name, age } = parsedUrl.query;
        let submittedData = '';

        if (name && age) {
          submittedData = `<p><strong>Submitted Data:</strong> Name: ${name}, Age: ${age}</p>`;
        }

        // insert submitted data into the HTML file
        const modifiedHtml = data.replace('<!-- INSERT DATA HERE -->', submittedData);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedHtml);
      });
    }
    // serve static files
    else {
      const filePath = path.join(__dirname, pathname);
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
    }
  }
  else if (req.method === 'POST' && pathname === '/submit') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      const { name, age } = formData;

      // redirect to home.html with query string
      res.writeHead(302, { Location: `/home.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}` });
      res.end();
    });
  }
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/home.html`);
});
