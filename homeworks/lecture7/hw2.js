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

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const iso = parsedUrl.query.iso;

    if(!iso){
        res.writeHead(400, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify({error: 'Missing iso parameter'}));
        return;
    }

    const date = new Date(iso);
    let result;

    if(pathname === '/api/parsetime'){
        result = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        };
    } else if (pathname === '/api/unixtime') {
        result = {
            unixtime: date.getTime()
        };
    } else {
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    }
});

const PORT = 8000;
server.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
});