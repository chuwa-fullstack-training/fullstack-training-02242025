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
const path = require('path');
const querystring = require('querystring');
const PORT = 3000;
const publicDir = path.join(__dirname, 'public');
const homeHtmlPath = path.join(publicDir, 'home.html');
const formHtmlPath = path.join(publicDir, 'form.html');
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/') {
    res.writeHead(302, { Location: '/home.html' });
    res.end();
  } else if (pathname === '/home.html') {
    fs.readFile(homeHtmlPath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading home.html');
        return;
      }
      const query = parsedUrl.query;
      const name = query.name || '';
      const age = query.age || '';
      const html = data.replace('{{name}}', name).replace('{{age}}', age);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  } else if (pathname === '/form.html') {
    fs.readFile(formHtmlPath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading form.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (pathname === '/submit') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const postData = querystring.parse(body);
      const name = postData.name || '';
      const age = postData.age || '';
      // Redirect to home.html with query string
      res.writeHead(302, { Location: `/home.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}` });
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});