// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// var is function scope, i is shared across all loop iterations
// the loop completes execution before setTimeout() callback run
// by the time setTimeout() execute, the value of i is already 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// let is block scope, each iteration has its own i value
// setTimeout() captures i value at the time of iteration

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// IIFE capture i at each iteration
// the i value has been pass to the function

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am another fn
// fn is pass by reference
// After 1 second, the fn has been reassigned

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// the element of object can be changed
// After 1 second, the obj name has been changed to new value