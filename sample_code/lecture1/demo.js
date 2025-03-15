foo(); // foo
fun(); // TypeError: fun is not a function

// functional declaration
function foo() {
  console.log('foo');
}

// functional expression
var fun = function() {
  console.log('fun');
}

/* 
declaration can hoist to the top and expression cannot
*/

