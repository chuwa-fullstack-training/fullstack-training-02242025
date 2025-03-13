// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// answer: 7
/*
var a = 10; declares a inside function f().
The if (a > 5) block updates a = 7.
The final console.log(a) prints 7.

*/

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
/*
var a = 5; is function-scoped, meaning it is accessible anywhere inside f(), even outside the if block.
Since a exists in the function scope, console.log(a) prints 5.

*/

//answer: 5

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
/* a = 3; implicitly creates a global variable (since var, let, or const is missing).
After calling f(), a becomes a global variable.
console.log(a); prints 3. */
// 3

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
/*
var a = 5; declares a global.
first() updates a = 6.
second() logs a, which was modified globally.
The correct output is 6.
 */

first(); // 6
second();// 5

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
/* Inside f(), var a = 7; creates a new function-scoped variable, shadowing the global a = 5.
Inside f(), console.log(a); refers to the local a, printing 7.
 global a = 5
 */
// answer:7

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}

/*
 hoists function declarations to the top
 Inside b(), function a() {} is hoisted as a local function, meaning a is treated as a local variable inside b(), not modifying the global a.
a = 10; is modifying the local function a, but since return; is before that, this assignment is never reached.
The global a = 1 remains unchanged.
console.log(a); prints 1.
*/
b(); //undifine
console.log(a);//1
