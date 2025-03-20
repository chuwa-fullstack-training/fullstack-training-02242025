// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// The output is 5 5 5 5 5 because the setTimeout callback function is executed after the loop is finished.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// The output is 0 1 2 3 4 because the let keyword creates a new variable i for each iteration of the loop.


// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// The output is 0 1 2 3 4 because the IIFE (Immediately Invoked Function Expression) creates a new scope for each iteration of the loop.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// The output is I am fn because the setTimeout function is called before the fn variable is reassigned.  

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// The output is { name: 'another obj' } because the setTimeout function logs the obj object after the name property is reassigned. 