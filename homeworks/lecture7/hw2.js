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

const server = http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url, true);
    const iso = parsedUrl.query.iso;
    const time = new Date(iso);

    if(!iso || isNaN(time.getTime())){
        res.writeHead(400, {'Content-Type':'application/json'});
        return res.end(JSON.stringify({error: 'Invalid ISO'}));
    }
    if(parsedUrl.pathname ==='/api/parsetime'){
        const response ={
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    }
    else if (parsedUrl.pathname==='/api/unixtime'){
        const response ={
            unixtime: time.getTime()
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(response));
    }
    else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not Found'}));
    }

});

const port = process.env.PORT || 3000;
server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
});
