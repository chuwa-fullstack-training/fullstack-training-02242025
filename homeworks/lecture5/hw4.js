// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

// 1, 2
// Promise.resolve(1) creates a promise that is immediately resolved with the value 1
// The first .then() method is called with the resolved value (1), Returns 2 (which becomes the resolved value for the next promise)
// The second .then() handler is called with the value 2 from the previous .then(): It logs 2 to the console

// 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// 1, 3
// Promise.reject(1) creates a promise that is immediately rejected with the value 1
// The .then() method is skipped because the promise is rejected
// The .catch() method is called with the rejected value (1)
// The promise returned by .catch() is then resolved with the value 3
// The second .then() method is called with the resolved value (3)


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
// Error: 2
/**
 * Promise.all() fails fast on the first rejection
 * The other promises continue executing in the background, but their results are ignored
 * The timeout durations determine which rejection occurs first
 * The .then() handler is skipped because of the rejection
 * The .catch() handler receives the first rejection error (Error: 2) and logs it
 */

