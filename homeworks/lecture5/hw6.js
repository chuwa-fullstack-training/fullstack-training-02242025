/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
const https = require('https');

function sequencePromise(urls) {
  const results = [];
  return urls.reduce((promiseChain, url) => {
    return promiseChain
      .then(() => getJSON(url))     
      .then(response => results.push(response)); 
  }, Promise.resolve())           
  .then(() => results);           
}


// option 1
function getJSON(url) {
  // this is from hw5
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };

    const request = https.get(url, options, response => {
      if (response.statusCode !== 200) {
        reject(
          new Error(`Did not get an OK from the server. Code: ${response.statusCode}`)
        );
        response.resume(); 
        return;
      }

      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData); 
        } catch (e) {
          reject(new Error(`Error parsing JSON: ${e.message}`)); 
        }
      });
    });

    request.on('error', err => {
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

sequencePromise(urls)
  .then(responses => {
    console.log(responses);           
    console.log(responses.map(r => r.items.length)); 
  })
  .catch(error => console.error(error));