// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// 7
// 

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5
// var is function scope, can be access outside of if statement and in the same function

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3
// a is implicitly as a globle variable

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
// 6
// a is a globle variable, can be access from second function

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// 7
// The print happens inside the function, so it print the function scope a as 7

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
// function a hoisting to the top of the scope inside the finction b
// variable a was change to 10 in the function scope, but it is not effect the globle a still as 1 to be print
