// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//5  var has function scope

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//3  a is treated as a global variable because it's not declared with let, var, or const

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
//6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//7
//var defined in function scope make a function scope vairable and not overwrite the global var
//var inside a function are local to that function

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//10
