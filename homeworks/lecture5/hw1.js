// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Printed out 5, 5 times after 1s. Becaue the setTimeout is call back after the loop finished, var is function-scoped, will not create new i for each iteration. 

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Printed 0,1,2,3,4, let is block scoped so a new i is generated for each iteration.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//Printed 0,1,2,3,4, IIFE create a new function with the new generated i as argument, for the function the i is local, so eac i is different.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//Printed out 'I am fn'. setTimeOut store a reference to fn then executed the orginal after 1s, fn will not change though get reassigned if setTimeOut already captured it. 

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

//Print out {name : 'another obj'}, setTimeOut store a ref to obj, and obj is updated before the execution of the funciton in time out, so the updated obj.name is printed.
