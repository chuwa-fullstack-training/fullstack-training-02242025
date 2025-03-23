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
const express = require("express");
const router = express.Router();
const url = require('url');

router.get("*", (request, response) => {

        const parsed = url.parse(request.url, true);
        const iso = parsed.query.iso;
        const date = new Date(iso);
        let output;
    
        if (!iso) {
            return response.statusCode(400).json({error: 'Missing query parameter'});
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
                return response.status(404).json({ contentType: 'application/json' });
        }
        response.json(output);
        // response.writeHead(200, { contentType: 'application/json' });
        // response.end(JSON.stringify(output));
    
});
module.exports = router;

//server.listen(3000, () => console.log('Server running at http://localhost:3000'));
