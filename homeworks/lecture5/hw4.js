// what is the output? and explain why?

// 1 Anwer: 1, 2
Promise.resolve(1) // promise resolve with 1
  .then(res => { //schedule .then()
    console.log(res); // print 1
    return 2; // now res is 2
  })
  .catch(err => { // skip
    return 3;
  })
  .then(res => { // apply .then() with res = 2
    console.log(res); // print 2
  });
 
//2 Answer: 1, 3
Promise.reject(1) // promise reject with 1
  .then(res => { //won't be executed
    console.log(res); 
    return 2;
  })
  .catch(err => { // schedule .catch()
    console.log(err); // print 1
    return 3; // now err is 3
  })
  .then(res => { // apply .then() with res = 3
    console.log(res); // print 3
  });

  
//3 Answer: ["Error: 2"]

// function runAsync() returns a promise that resolves with value x after 1 second 
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

// function runReject() returns promise that reject with value x after x seconds
function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

// when there is promise got rejected, promise.all() will catch the first error and return it
// so the output will be ["Error: 2"]
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
