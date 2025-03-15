const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/home.html") {
    fs.readFile("home.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Error loading page");
        return;
      }

      // Extract query parameters (if any)
      const name = parsedUrl.query.name || "";
      const age = parsedUrl.query.age || "";

      // Inject submitted data into the HTML
      const updatedContent = data
        .replace("{{name}}", name)
        .replace("{{age}}", age);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(updatedContent);
    });
  } else if (req.method === "POST" && pathname === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = querystring.parse(body);
      const name = encodeURIComponent(formData.name || "");
      const age = encodeURIComponent(formData.age || "");

      // Redirect back to home.html with query parameters
      res.statusCode = 302;
      res.setHeader("Location", `/home.html?name=${name}&age=${age}`);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
