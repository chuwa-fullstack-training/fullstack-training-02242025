// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // after 1 sec, we have 5 5 5 5 5, var is function scope that means only one i is created

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // after 1 sec, we have 0 1 2 3 4, let is block scope, so 5 i is created

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
} // after 1 sec, we print 0, then after 1 sec, print 2 etc.. until we print 4. because setTimeout and console log is inside of IIFE function, so new i 
// is created every iteration.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
} // after 1 sec, we print I am fn, when setTimeout is called, fn points to the first version.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// after 1 sec, print another obj because the reference changed to another obj