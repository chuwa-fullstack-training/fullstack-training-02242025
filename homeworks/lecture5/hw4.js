// what is the output? and explain why?

// 1
Promise.resolve(1) // log(1) 
  .then(res => {
    console.log(res); // log(1)
    return 2; // return 2
  })
  .catch(err => {
    return 3; // no error
  })
  .then(res => {
    console.log(res); // res is 2, log(2)
  });
// 1, 2

// 2
Promise.reject(1) // reject 1
  .then(res => { // skip as rejected
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err); //  log(1)
    return 3; // return 3
  })
  .then(res => {
    console.log(res); // log(3)
  });
//  1  3


//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
// promise.all will wait for all promises to resolve or reject,
// runAsync(1) => resolve in 1 second, runReject(4): resolve in 4 seconds, runAsync(3) in 3 seconds, runReject(2) in 2 seconds
// runReject(2) will reject first, so it will be catched by .catch(err => console.log(err));
// then ignore the rest
//output Error: 2


