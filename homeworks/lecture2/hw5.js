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
//The declaration of y will be moved to the top, so when x !==3, y=5, then y===5 is true, x=3
//First will print 5, second will print 5; x=3 is declared inside y==5 condition, the outside x===3 not true, so only 2 print happens.


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
//x=3, so x===3 is true, var x=2 under this condition, the first print 2.
//The x is redeclared to 2, the second print 2.
