/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

const http = require('http')
const PORT = 3000;


const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = myUrl.pathname;
    const iso = myUrl.searchParams.get('iso'); //2023-05-22T12:34:56.789Z
    if (req.method === 'GET') {
        if (!iso) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Missing iso query parameter' }));
        }
        const date = new Date(iso);
        if (pathname === '/api/parsetime') {
            const response = {
                hour: date.getUTCHours(),
                minute: date.getUTCMinutes(),
                second: date.getUTCSeconds(),
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(response));
        }
        if(pathname  === '/api/unixtime') {
            const response = {
                unixtime: date.getTime()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(response))
        }
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }

});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
