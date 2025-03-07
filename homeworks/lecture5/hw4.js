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
//1, 2
//The Promise have the state resolved and pass 1 as res, so first the console will print 1, when pass 2 as res, there's no error so return 3 will not be executed, console will print 2;

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
//1, 3
//The promise have the status rejected, which raise an error, so the first .then() is not operated, it goes to the first .catch(), print 1 and set res to 3, then print 3 at the last .then();

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

//Error:2
//Promise.all wait for all the functions get executed and if there is an reject, reject for all immediately
//For each fucntion, runAsync(1) will return resolve(1) after 1s, runReject(4) will reject(4) after 4s, runAsync(3) will resolve(3) after 3s, runReject(2) will reject(2) after 2s.
//The order is resolve(1), reject(2), resolve(3), reject(4)
//When reject(2) happens, the Promise.all catch error and console.log error `Error:2`
