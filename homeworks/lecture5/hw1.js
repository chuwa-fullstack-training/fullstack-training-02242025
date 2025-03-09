// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// output 5 5 5 5 5
// Because var is function-scoped, so the setTimeout callback run after the loop completes, i is 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//output 0 1 2 3 4
//Because each callback closes over its own instance of i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

//output 0 1 2 3 4
// function is used to capture value of i in each iteration, this creates a new scope whit a parameter i to hold the current loop value

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};

//output "I am fn"
// when setTimeout callback, the current function is passed by reference to setTimeout. The current function have entered event Queue, so reassigning is not work.

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";


//output "another obj"
//Objects are passed by reference, so when setTimeout callback, it sees the updated object.