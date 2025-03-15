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

const http = require("http");
const url = require("url");

// Create the HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;
  const isoTime = query.iso; // Extract ISO timestamp from query parameters

  if (!isoTime) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Missing 'iso' query parameter" }));
    return;
  }

  const date = new Date(isoTime); // Convert to Date object

  let responseObj;

  if (pathname === "/api/parsetime") {
    // Extract hour, minute, second
    responseObj = {
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    };
  } else if (pathname === "/api/unixtime") {
    // Return Unix timestamp in milliseconds
    responseObj = { unixtime: date.getTime() };
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid endpoint" }));
    return;
  }

  // Send JSON response
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(responseObj));
});

// Start the server on port 8000
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
