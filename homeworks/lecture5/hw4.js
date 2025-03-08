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

  // 1 2
  // print resolved 1 in the first then, 
  // skip catch due to there is no error happened,
  // print returned 2 from first then and print it in the second then

// // 2
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

// 1 3
// skip first then, catch the reject 1 and print it
// print returned 3 in the last then block

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
// resolved with 1 after 1 second, but Promise.all() still waiting for other promises
// Promise.all() fails as soon as one promise rejects
// then stops waiting for other promises
// so only print error
