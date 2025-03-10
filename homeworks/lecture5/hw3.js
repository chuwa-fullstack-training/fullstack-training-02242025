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
//a c e d b
//Synchronous code executes first, then microtasks (Promise .then()) before macrotasks (setTimeout)


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
// Synchronous code executes first, then microtasks (Promise .then()) before macrotasks (setTimeout)
/*
console.log(1) executes first because it's inside the Promise constructor, which runs synchronously when fn() is called
console.log('start') executes next because it's synchronous code
console.log(res) (which logs 'success') executes last because it's in a .then() callback, which is a microtask that runs after all synchronous code completes
*/
