// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// console log result will be 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}


// 2. When executed, what value will be output?
// 7 because value declared with var will be hoisted to the top of the current scope
function f2() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3 because where in line 33, a is declared with var and hoisted to the top of the script
function f3() {
  a = 3;
}
f3();
console.log(a);

// 4.
// 6 because var is declared at the global scope, and is given value 6, so second function will console log 6
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5.
// 7 because var is function-scoped. a is already decalred, so it is not be declared again and it will be given a new value 7
var a = 5;
function f4() {
  var a = 7;
  console.log(a);
}
f4();

// 6.
// 1 because var is declared at the global scope and assigned value within function b
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
