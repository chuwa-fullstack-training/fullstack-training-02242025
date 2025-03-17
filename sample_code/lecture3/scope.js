function f() {
  var a = 1,
    x = 1;
  function f1() {
    var b = 1,
      x = 'a';
    function f2() {
      var c = 1,
        x = 2;
      console.log('inside f2', 'a:', a, 'b:', b, 'c:', c, 'x:', x);
    }
    f2();
    console.log('inside f1', 'a:', a, 'b:', b, 'x:', x);
  }
  f1();
  console.log('inside f', 'a:', a, 'x:', x);
}
f();


// Scope refers to where variables are accessible in your code (e.g., within a function, globally, etc.). It defines the visibility of variables.

// Value Passing (or pass-by-value) means that when you pass a primitive data type (like a string, number, boolean) to a function, the function gets a copy of that value, not a reference to the original variable. Therefore,
// changes to that value inside the function do not affect the original value outside the function.
