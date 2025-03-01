// Hoisting

// 1. 
var x;

if (x !== 3) {
  console.log(y); // return undefined
  // variable declarations (but not initializations) are hoisted to the top of their scope
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // return 5
}
if (x === 3) {
  console.log(y); // return 5
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // return 2
}
console.log(x); // return 2

