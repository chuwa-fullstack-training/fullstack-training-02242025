// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//7，函数内部定义
// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//5，var是函数作用域，不出函数都好使，如果是let就不好使了
// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//3，直接声明那就是全局变量，到哪都好使
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
//6，访问的全局变量6
// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//输出局部的var，近水楼台先得月，川普的电话打不到我前线指挥司令部
// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//1，hoisting直接给你全局变量整没了，6