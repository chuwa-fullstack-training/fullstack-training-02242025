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
  // this is from hw5
  return new Promise((resolve, reject) =>{
    const options = {headers: {'User-Agent': 'request'}};
    https.get(url, options,(res)=>{
      let data ='';
      res.on('data', chunk=>{
        data += chunk;
      })
      res.on('end', ()=>{
        try{
          console.log(JSON.parse(data));
          if (res.statusCode ===200){
            resolve(JSON.parse(data));
          }
          else{
            reject(`Did not get an OK from the server. Code: ${res.statusCode}`);
          }
        }
        catch(e){
          reject(`Error parsing JSON: ${e.message}`);
        }
      });
    }).on('error', (err)=>{
      reject(`Request Failed: ${err.message}`);
    })
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

console.log(sequencePromise(urls));
