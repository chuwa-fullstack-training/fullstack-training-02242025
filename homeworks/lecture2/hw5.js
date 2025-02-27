// Hoisting

// 1.
//undefined
//5
//5
// y is not defined at console.log(y)
// in line 16, x is declared, so it will be not declared again and will be given a new value 3
// that's why there is another console log which outputs 5
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


// 2.
//2
//2
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

