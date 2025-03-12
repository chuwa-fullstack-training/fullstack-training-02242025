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
const url = require('url');  // To parse query strings

const server = http.createServer((req, res) => {
  const { method, url: requestUrl } = req;

  if (method === 'GET') {
    if (requestUrl === '/') {
      res.end('This is the home page');
    } else if (requestUrl.startsWith('/home.html')) {

      const queryParams = url.parse(requestUrl, true).query;

      fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
          res.end('Error reading home.html');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });

          html = html.toString()
                     .replace('{{title}}', queryParams.title || '')
                     .replace('{{content}}', queryParams.content || '');
                     
          res.write(html);
          res.end();
        }
      });
    } else {
      res.end('404 - Page not found');
    }
  } else if (method === 'POST') {
    if (requestUrl === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });

      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const queryParams = new URLSearchParams(parsedBody);
        const title = queryParams.get('title');
        const content = queryParams.get('content');

        res.statusCode = 302;
        res.setHeader('Location', `/home.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`);
        res.end();
      });
    } else {
      res.end('404 - Page not found');
    }
  } else {
    res.end('Unsupported method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
