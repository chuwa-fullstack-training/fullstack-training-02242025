// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output? Answer: 7, var uses in function scope
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output? Answer: 5
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output? Answer: 3
// if don't define, variable will be treated as global variable
function f() {
  a = 3;
}
f();
console.log(a);

// 4. Answer: 6
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5. Answer: 7
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6. Answer: 1
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
