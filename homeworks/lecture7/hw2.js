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

// your code here
const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const parsed = url.parse(request.url, true);
    const iso = parsed.query.iso;
    const date = new Date(iso);
    let output;

    if (!iso) {
        response.writeHead(400, { contentType: 'application/json' });
        response.end(JSON.stringify({ error: 'Missing query parameter' }));
        return;
    }

    switch (parsed.pathname) {
        case '/api/parsetime':
            output = {
                hour: date.getUTCHours(),
                minute: date.getUTCMinutes(),
                second: date.getUTCSeconds()
            }
            break;
        case '/api/unixtime':
            output = {
                unixtime : date.getTime()
            };
            break;
        default:
            response.writeHead(404, { contentType: 'application/json' });
            response.end(JSON.stringify({ error: 'Invalid query parameter' }));
            return;
    }
    response.writeHead(200, { contentType: 'application/json' });
    response.end(JSON.stringify(output));
}
);
server.listen(3000, () => console.log('Server running at http://localhost:3000'));
