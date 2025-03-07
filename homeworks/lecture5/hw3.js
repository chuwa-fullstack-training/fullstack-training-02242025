// what is the output in order? and explain why?

// 1  Answer:'a', 'c', 'e', 'd', 'b'

// print 'a'
console.log('a');
// no print, setTimeout is placed in the event queue and will execute after the current call stack is empty
setTimeout(() => console.log('b'), 0); 
// print 'c'
console.log('c');

// create a new promise and immediately execute 
new Promise((resolve, reject) => {
  // marks the promise as resolved but not trigger the callback yet
  resolve('d');
  // print 'e'
  console.log('e');
  // has no effect, because the promise is already resolved
  reject('f');
  // promise is fulfilled and .then callback function is scheduled in the microtask queue
}).then(result => console.log(result));

// call stack is now empty, event loop will move the callback from the event queue to the call stack
// event loop checks microtask queue, finds the .then() callback, push it to the call stack
// print 'd'
// event loop checks macrotask queue, find setTimeout callback, push it to the call stack
// print 'b'


// 2 Answer: 1 start success
// function fn is defined with a promise that immediately logs '1' and resolves with 'success'
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });
// fn is called, promise executes, print "1"
// promise got resolved, .then() is placed in the microtask queue and will be executed after main thread is empty
fn().then(res => {
  console.log(res);
});
// print "start"
console.log('start');
// main thread is empty, event loop will move the .then() callback from the microtask queue to the call stack
// print "success"
