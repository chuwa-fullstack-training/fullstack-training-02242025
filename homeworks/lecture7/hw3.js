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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === 'GET') {
    if (pathname === '/' || pathname === '/home.html') {
      const filePath = path.join(__dirname, 'home.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading home.html');
          return;
        }

        let modifiedData = data;
        if (Object.keys(parsedUrl.query).length > 0) {
          let submittedDataHtml = '<div style="border:1px solid #ccc;padding:10px;margin-top:20px;">';
          submittedDataHtml += '<h3>Submitted Data:</h3><ul>';
          for (let key in parsedUrl.query) {
            submittedDataHtml += `<li><strong>${key}:</strong> ${parsedUrl.query[key]}</li>`;
          }
          submittedDataHtml += '</ul></div>';
          modifiedData = data.replace('</body>', submittedDataHtml + '</body>');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedData);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page not found');
    }
  } else if (req.method === 'POST') {
    if (pathname === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);
        const queryParams = {};
        for (const [key, value] of params.entries()) {
          queryParams[key] = value;
        }
        const qs = new URLSearchParams(queryParams).toString();

        res.statusCode = 302;
        res.setHeader('Location', '/home.html?' + qs);
        res.end();
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page not found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Unsupported method');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
