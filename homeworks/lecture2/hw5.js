// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}
// Undefined
// 5
// 5
// y is hoisting to the top of scope and y was assigned as 5 and print twice

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2
// 2
// var is function scope and the value is changed as 2 inside the if block
