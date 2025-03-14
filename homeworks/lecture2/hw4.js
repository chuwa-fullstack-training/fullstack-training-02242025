// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// 7, a = 10, 10 > 5, so a = 7

// 2. When executed, what value will be output?
function f() {
  //var a
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5, var is function scope, since a is hoisted to the top, var a;
// a = 5, assigned a value, so output a is 5
// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3, since a is not declared,  so it creates an implicit global variable.
// assign 3 to a in global scope, so output is 3

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
// 6, var a = 5; declares a globally, call first(); sets a = 6;
//second(), logs the current value of a, a is 6, so output is 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//7, 5 is global variable, a = 7 shadows a = 5
//call f(), then output is 7

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// 1
//Inside b(), function a() {} is hoisted within the function b, so a is a local function variable in b().
//a = 10; inside b() so local a is 10, global a is not changed
//so output is 1.