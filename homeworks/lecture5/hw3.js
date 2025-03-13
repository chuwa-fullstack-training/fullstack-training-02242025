// what is the output in order? and explain why?

// 1
console.log('a'); //
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

/*
a
c
e
d
b

sync  a  c  e, then print promise like then (resovle) , then callstack in setTime out - b
*/

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

/*
1
start
successs

call fn inside syn 1 first ,  syn start finsh , then resvole promise succeesss

*/

