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
// a c e d result b
// Execute code one by one in the main thread
// Execute Microtask (Promise.then()) and execute console.log() first, then resolve, then result
// Execute Macrotask (setTimeout()) at the last

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
// 1 start success
// fn() is called, so the Promise constructor runs immediately
// Inside the Promise constructor, console.log(1) executes immediatelys
// resolve('success') is called
// print start in the main thread
// run microtask (Promise.then()) and print success
