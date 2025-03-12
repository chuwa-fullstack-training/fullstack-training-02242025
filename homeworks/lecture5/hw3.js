// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
//a, c, e, d, b
//setTimeout is scheduled in callback queue,
//next inside promise constructor e execute inmmediatly
//after the promise is resolved, resolve(d) schedules the .then() handler to run after the synchronous code finishes, it is queued as microtasks
//reject is ignored because the promised is to be handled to resolve with d
//.then() handler is placed in the microtask queue (higher priority than the callback queue)
// This will be executed after the synchronous code (and before setTimeout)


// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
//1, start, success
//fn is invoked so 1 is logged
//resolve('success') is asynchronous, the .then() callback is scheduled to run after the synchronous code finishes
