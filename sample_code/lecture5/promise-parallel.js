const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

const promises = urls.map(url => getJSON(url));

Promise.all(promises).then(allRes => console.log(allRes)).catch();
//all fufilled then go into then, if any failed, there is an error and no result for any

Promise.race(promises).then(firstRes => console.log(firstRes));
//all will be resolved but only the fastest result show

Promise.allSettled(promises).then(allRes => console.log(allRes));
//nomatter fufilled or reject, all will be returned buut the result get wrapped into some result status
