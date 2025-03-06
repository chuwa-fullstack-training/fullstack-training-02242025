/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
import https from 'https';


function getJSON(url) {
  // implement your code here
  return new Promise((resolve, reject) =>{
    const options = {
          headers: {
            'User-Agent': 'request'
          }
        };
    https.get(url, options, response =>{
      if(response.statusCode != 200){
        reject(new Error (`Request failed: ${response.statusCode}`));
        return;
      }
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      })

      response.on('end', () => {
        try{
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        }catch(err){
          reject(new Error(`Failed to parse JSON: ${err.message}`));
        }
      });
    }).on('error', err => {
      reject(new Error(`Request error: ${error.message}`));
    })
  });
}

async function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
  for(const url of urls){
    try{
      const response = await getJSON(url);
      results.push(response);
    }catch(err){
      console.error(err.message);
    }
  }
  
  return results;
}

// option 1
// function getJSON(url) {
//   // this is from hw5
// }

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

const res = await sequencePromise(urls);
res.forEach((value)=>console.log(value.items.length));
