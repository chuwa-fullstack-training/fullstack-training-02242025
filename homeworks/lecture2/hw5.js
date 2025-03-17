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
// output: undefined, 5, 5
//JS hoisted var, x was declared but undefined, 
//so undefined !== 3 → is true, 
// console.log(y);-> output is undefines, because y is hoisted but not yet assigned a value.
//var y = 5;so y is assigned 5.
//if (y === 5) { var x = 3; } → x is 3 now.
//console.log(y); → output is 5.
//if (x === 3) { console.log(y); }
//x === 3 is now true, so console.log(y)-> output 5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

//output 2, 2
//var x = 3; → x is initialized to 3.
//if (x === 3) is true
//var x = 2
//Since var is function-scoped, this does not create a new x but reassigns the existing global x to 2.
//console.log(x); -> output is 2
//outside if loop, console.log(x); output is 2 because x is assigned to 2.