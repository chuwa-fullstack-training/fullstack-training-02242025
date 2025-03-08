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
// when both promise and setTimeout are put in a queue, promise gets executed first, f is rejected so it's ignored.

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
// 1, start, success
// console.log(1) inside promise is executed immediately, then 'success' is put into queue, then console.log('start'),
// and finally 'success'

