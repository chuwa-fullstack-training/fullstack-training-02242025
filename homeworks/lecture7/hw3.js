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

const PORT = 3000;

const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = myUrl.pathname;

    if (req.method === 'GET') {
        if (pathname.startsWith('/home.html')) {
            // Read and serve home.html with query parameters
            //when file reading is done, the callback runs
            fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }

                // Extract query parameters
                const name = myUrl.searchParams.get('name') || '';
                const age = myUrl.searchParams.get('age') || '';

                // Inject query parameters into the HTML
                const modifiedHtml = data.replace('{{name}}', name).replace('{{age}}', age);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(modifiedHtml);
            });
            return;
        }
    }

    if (req.method === 'POST' && pathname === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = querystring.parse(body);//make string to object
            const name = parsedBody.name || '';
            const age = parsedBody.age || '';

            // Redirect to home.html with submitted data
            res.writeHead(302, { Location: `/home.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}` });
            res.end();
        });
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
