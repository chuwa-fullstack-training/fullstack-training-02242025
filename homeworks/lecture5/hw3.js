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

// a, c, e, d, b
// first print a, c as synchronous functions, then create the new promise where it prints e immediately, 
// then resolve the promise (microtask) first which prints d, finally run the macrotask setTimeout to print b

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
// first create fn promise, then call that promise to print 1 and then run the synchronous 'start', finally resolve the promise 
// to print 'success'
