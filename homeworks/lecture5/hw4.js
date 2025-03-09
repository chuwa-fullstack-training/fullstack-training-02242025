// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

//Promise.resolve(1) immediately resolves with the value 1
//The first .then callback runs, logging 1 and returning 2
// no error so .catch is skipped
// Then next .then receives 2 from last then. return and logs it

// // 2
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// Output: 1 3
//Promise.reject(1) immediately rejects with the value 1
//The first .then is skipped because of the rejection
//The .catch callback catches the error, logs 1 and returns 3
// Then .then receives 3 and logs it

//3
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Error:2
// runAsync(1) resolves with 1 after 1000 ms
// runReject(4) rejects with 'Error:4' after 4000 ms
// runAsync(3) resolves with 3 after 3000 ms
// runReject(2) rejects with 'Error:2' after 2000 ms
// Promise.all waits for all promises but rejects as soon as the first rejection occurs. runReject(2) is the fast to reject.
