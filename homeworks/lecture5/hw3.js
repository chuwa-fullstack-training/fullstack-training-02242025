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

// a c e d b

// 'b' is in macroloop, so called last, and resolve is in micro loop, so called after main loop. for the main loop, that is a, c, and e respecitvely
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
// same above, so 1 and start is in main loop , success is in micro 