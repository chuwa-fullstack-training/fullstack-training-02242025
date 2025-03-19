/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
const { getJSON } = require('./hw5.js');

// one way:
// function sequencePromise(urls) {
//   const results = [];
//   // function fetchOne(url) {
//   //   // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
//   //   // if you use `fetch`, you have to use browser console to test this homework
//   //   return getJSON(url).then(response => results.push(response));
//   // }
//   return urls.reduce((promise, url) => {
//     return promise
//            .then(() => getJSON(url))
//           .then(response => results.push(response))
//   }, Promise.resolve()).then(() => results);
// }


//another way
//When you use the async keyword in front of a function, it always returns a Promise
async function sequencePromise(urls) {
  const results = [];
  for(let url of urls) {
    let data = await getJSON(url)
    results.push(data)
  }
  return results
}

// // option 1
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

sequencePromise(urls).then(results => {
  console.log(results); // Now the results array is fully populated
});
