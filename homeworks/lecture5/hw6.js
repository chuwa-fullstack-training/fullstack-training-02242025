/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
  return urls.reduce((promise, url) => {
    return promise.then(() => getJSON(url)).then(response => {
      results.push(response);
    });
  }, Promise.resolve());
  return results;
}

// option 1
function getJSON(url) {
  // implement your code here
    return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };

    https.get(url, options, response => {
      let data = '';
    
      if (response.statusCode !== 200) {
        reject(new Error(`Did not get an OK from the server. Code: ${response.statusCode}`));
        return;
      }
      
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`${e.message}`));
        }
      });
    }).on('error', err => {
      reject(new Error(`Encountered an error trying to make a request: ${err.message}`));
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
