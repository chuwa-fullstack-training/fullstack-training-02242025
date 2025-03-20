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
const url = require('url')
const PORT = 3000

const server = http.createServer((req, res)=> {
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const iso = parsedUrl.query.iso

    if(path==="/api/parsetime" && iso){
        try{
            const date = new Date(iso)
            const result = {
                hour: date.getUTCHours(),
                minute: date.getUTCMinutes(),
                second: date.getUTCSeconds()
            }
            // send json response
            res.writeHead(200, { contentType: 'application/json' })
            res.end(JSON.stringify(result))
        }catch(error){
            res.end('Error when read iso')
        }
    }else if(path==="/api/unixtime" && iso){
        try{
            const date = new Date(iso)
            const result = {
                unixtime: date.getTime()
            };
            res.writeHead(200, { contentType: 'application/json' })
            res.end(JSON.stringify(result))
        }catch(error){
            res.end('Error when read iso')
        }  
    }else{
        res.end('Error when parse the request url')
    }

})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });