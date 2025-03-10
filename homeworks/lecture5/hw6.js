function sequencePromise(urls) {
  const results = [];
  return urls
    .reduce((promise, url) => {
      return promise
        .then(() => getJSON(url))
        .then((response) => results.push(response));
    }, Promise.resolve())
    .then(() => results);
}

function getJSON(url) {
  const https = require("https");
  return new Promise((resolve, reject) => {
    const options = { headers: { "User-Agent": "request" } };
    https
      .get(url, options, (response) => {
        let data = "";
        if (response.statusCode !== 200) {
          reject(
            new Error(`Request failed. Status code: ${response.statusCode}`)
          );
          response.resume();
          return;
        }
        response.on("data", (chunk) => (data += chunk));
        response.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error(`Invalid JSON response: ${error.message}`));
          }
        });
      })
      .on("error", (err) => reject(new Error(`Request error: ${err.message}`)));
  });
}

const urls = [
  "https://api.github.com/search/repositories?q=javascript",
  "https://api.github.com/search/repositories?q=react",
  "https://api.github.com/search/repositories?q=nodejs",
];

sequencePromise(urls)
  .then((results) => console.log(results.map((res) => res.items.length)))
  .catch((err) => console.error(err.message));
