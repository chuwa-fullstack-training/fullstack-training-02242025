// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// five 5: var is shared across function
// reason: the loop has already finished executing, and i has the final value 5.
// Since all callbacks reference the same i, they all log 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 0 1 2 3 4
// reason: let is block-scoped, meaning each iteration gets a fresh copy of i in its own scope.
// The setTimeout callback captures the value of i at each iteration

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// reason: Immediately Invoked Function Expression (IIFE) to create a new scope for each iteration
// passes a unique copy of i into the IIFE

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};

// "I am fn"
// fn is reassigned to a new function after setTimeout

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";

// "another obj"
// after timeout runs, it logs the updated object
