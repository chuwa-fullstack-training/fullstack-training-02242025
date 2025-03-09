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
output: acedb
firstly print a, then print b but executed in the end. In the promise, d is resolved so printed when promise is completed. then print e. f won't be ptinted because promised is resolved

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
output: 1. start, success
function is called and create a new promise.  print 1 firstly and place success in microtasks. next printing start. finally execute microtask and print success
