// Below are some JavaScript scope related questions.

//1. When executed, what value will be output? 7, because a is greater than 5.
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

 // 2. When executed, what value will be output? 5, var is function scope, doesnt matter where you define it
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output? 3, because without a var, let, const, a should be function scope / global scope
function f() {
  a = 3;
}
f();
console.log(a);

// 4. 6, because a is function scope
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5. 7, because the var is function scope, the inner a shadows the outer a.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6. 1, because inside b(), a will get hoisted by a() and become undefined, when call a, it's still 1
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
