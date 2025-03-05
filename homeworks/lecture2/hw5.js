// Hoisting

1.
var x;

if (x !== 3) {
  console.log(y); // undefined, because now y is not defined yet, we move a var y to the top
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // 5, because y is assigned to 5
}
if (x === 3) {
  console.log(y); // 5, because x is hoisted and x === 3 is true
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // 2, x is hoisted and assigned with 2
}
console.log(x); // 2, x is hoisted inside if(), so it becomes 2

