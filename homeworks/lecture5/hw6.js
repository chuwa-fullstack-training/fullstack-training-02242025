/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
const https = require('https');
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here

  return urls.reduce((promiseChain, url) => {
    return promiseChain.then(() => fetchOne(url));
  }, Promise.resolve())
  .then(() => results);
}

// option 1
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: { 'User-Agent': 'request' } 
    };

    const request = https.get(url, options, (response) => {
      let data = '';

      if (response.statusCode !== 200) {
        reject(new Error(`Request failed. Status Code: ${response.statusCode}`));
        response.resume(); 
        return;
      }

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error(`Error parsing JSON: ${error.message}`));
        }
      });
    });

    request.on('error', (err) => reject(new Error(`Request error: ${err.message}`)));
  });
}


// option 2
// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls)
  .then(results => console.log(results.map(res => res.items.length))) // Expected output: [30, 30, 30]
  .catch(err => console.error(err.message));
