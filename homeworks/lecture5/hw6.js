/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */

const https = require('https')
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
  return urls.reduce((promise,url) =>{
    return promise.then(() => {
      return getJSON(url).then(response => {
        results.push(response);
      });
    });
  },Promise.resolve()).then(() => results);

  return results;
}

// option 1
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request' // Required for GitHub API
      }
    };

    https.get(url, options, response => {
      let data = '';

      // Check if response status is not 200
      if (response.statusCode !== 200) {
        reject(new Error(`Request failed. Status code: ${response.statusCode}`));
        response.resume(); // Discard response
        return;
      }

      // Accumulate data
      response.on('data', chunk => {
        data += chunk;
      });

      // When response ends, parse JSON and resolve promise
      response.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Error parsing JSON: ${error.message}`));
        }
      });
    }).on('error', err => {
      reject(new Error(`Request error: ${err.message}`));
    });
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
  .then(results => {
    console.log('Number of results:', results.map(r => r.items.length));
  })
  .catch(err => console.error(err));