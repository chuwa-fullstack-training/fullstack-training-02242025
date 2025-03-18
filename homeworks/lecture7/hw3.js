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

const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.startsWith("/home.html")) {
    const parsedUrl = url.parse(req.url, true);
    const queryData = parsedUrl.query;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><head><title>Home</title></head><body>");
    res.write("<h1>Submit Your Data</h1>");
    res.write('<form method="POST" action="/home.html">');
    res.write('Name: <input type="text" name="name"><br>');
    res.write('Age: <input type="text" name="age"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");

    if (Object.keys(queryData).length > 0) {
      res.write("<h2>Submitted Data</h2>");
      res.write(`<p>Name: ${queryData.name || ""}</p>`);
      res.write(`<p>Age: ${queryData.age || ""}</p>`);
    }

    res.write("</body></html>");
    return res.end();
  }

  if (req.method === "POST" && req.url === "/home.html") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const parsedBody = querystring.parse(body);

      const redirectUrl = "/home.html?" + querystring.stringify(parsedBody);
      res.statusCode = 302;
      res.setHeader("Location", redirectUrl);
      return res.end();
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
