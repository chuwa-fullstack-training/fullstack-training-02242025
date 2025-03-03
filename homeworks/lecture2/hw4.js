// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//Nothing, will print out 7 if f() is called.

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//Nothing, Print out 5 if f is called.

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//It will print out 3;

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
//Print out 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//Nothing. Print out 7 when f() is called

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//Print out 1, a inside b is hoisting to the top and no longer the global a, so global a remain 1;
