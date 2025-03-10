const https = require("https");

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "request",
      },
    };

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

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (error) {
            reject(new Error(`Invalid JSON response: ${error.message}`));
          }
        });
      })
      .on("error", (err) => {
        reject(new Error(`Request error: ${err.message}`));
      });
  });
}

getJSON("https://api.github.com/search/repositories?q=javascript")
  .then((response) => console.log(response.items.length)) // Expected output: 30
  .catch((err) => console.error(err.message));
