// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res); // 1
    return 2; // return to next then.
  })
  .catch(err => { //no error skip
    return 3;
  })
  .then(res => {
    console.log(res);//2
  });

  /// 1, 2 .  promise resolve this 1 will excute then. then console res=1 then out put 1, return 2 will assign to next then, no error
  // in catch . continue to next then output //2

// // 2
Promise.reject(1)  //get error not excute then
  .then(res => {//sikp
    console.log(res);
  })
  .catch(err => {
    console.log("x",err); // 1
    return 3; // return 3 pass to next then
  })
  .then(res => {
    console.log(res);
  });

//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
} // create a promise resovle after 1 second with x .

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
} //after x seconds return error message

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//  error :2

// this will runAsync (1) and runasync(3) in 1 second is succrss resolve..  when at 4 second will runRejct 2<4 in setTimeout(run) then return runReject(2)]
//once promise,all get error immediately return error happen which is 2;

