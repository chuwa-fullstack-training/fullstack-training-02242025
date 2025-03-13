// change http request into promise-based function ///  node.js need

const https = require('https');
const { options } = require('joi');
const { resolve } = require('path');

// function httpsRequest(url) {
//   const options = {
//     headers: {
//       'User-Agent': 'request'
//     }
//   };
//   const request = https.get(url, options, response => {
//     if (response.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${response.statusCode}`
//       );
//       response.resume();
//     }

//     let data = '';
//     response.on('data', chunk => {
//       data += chunk;
//     });
//     response.on('end', () => {
//       try {
//         // When the response body is complete, we can parse it and log it to the console
//         console.log(JSON.parse(data));
//       } catch (e) {
//         // If there is an error parsing JSON, log it to the console and throw the error
//         throw new Error(e.message);
//       }
//     });
//   });
//   request.on('error', err => {
//     console.error(
//       `Encountered an error trying to make a request: ${err.message}`
//     );
//   });
// }

const https = require('https');
const { options } = require('joi');
const { resolve } = require('path');
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

getJSON('https://api.github.com/search/repositories?q=javascript')
  .then(response => console.log(response.items.length)) // output: 30
  .catch(err => console.log(err)); // if you remove options from https.get parameters, you might see an error
