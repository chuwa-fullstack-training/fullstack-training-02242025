// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 5, 5, 5, 5, 5
// Explanation: var is function-scoped, so there's only one i variable shared across all iterations.
// When the setTimeout callbacks execute after 1 second, the loop has already completed and i is 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2, 3, 4
// Explanation: let is block-scoped, so each iteration gets its own i variable.
// The setTimeout callbacks capture the i value at each iteration.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Output: 0, 1, 2, 3, 4
// Explanation: The IIFE (Immediately Invoked Function Expression) creates a new scope for each iteration,
// capturing the current value of i, similar to how let works.

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
// Output: I am another fn
// Explanation: setTimeout schedules the function by reference. When the function executes after 1 second,
// it uses the current definition of fn, which has been reassigned.

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// Output: {name: 'another obj'}
// Explanation: The setTimeout callback references the obj object. When it executes after 1 second,
// it logs the current state of the object, which has been modified.
