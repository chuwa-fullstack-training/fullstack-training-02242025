// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output? 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output? 5
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output? 3
function f() {
  a = 3;
}
f();
console.log(a);

// 4. When executed, what value will be output? 6
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5. When executed, what value will be output? 7
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6. When executed, what value will be output? 1
// Important: function a() {} is hoisted as a local variable a. so a = 10 only changes the local variable a.
// but in 4th question, a=6 changes the global variable a.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
