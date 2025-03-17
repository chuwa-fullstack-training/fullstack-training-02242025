// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5, 5, 5, 5, 5 
// var i is global variable, When setTimeout executes after 
// 1 second, the loop has already finished, and i is 5.
// all callbacks are reference the same i.

// 4, 4, 4, 4, 4
// because setTimeout push console.log(i) to the callback queue and they only execute when the main script is finished
// by which time i is set to 5 because is is declared with var

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0, 1, 2, 3, 4
// because setTimeout push console.log(i) to the callback queue and they only execute when the main script is finished
// but because i is declared with let which is block scoped, each iteration gets a new i instance

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0, 1, 2, 3, 4
//create a new scope for each iteration, so i is local variable
// and it logs the correct i value for each iteration.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//I am another fn.
//setTimeout schedules the function by reference, so it will executes the new fn

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// setTimeout(() => console.log(obj), 1000); captures a reference to obj, not a copy.
// Before setTimeout executes, obj.name is modified to 'another obj'.
//Since console.log(obj) prints the current state of obj, it logs { name: 'another obj' }.
