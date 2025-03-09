// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));

//output 'a' 'c' 'e' 'd' 'b'
// setTimeout is put to Callback Queue.
// when creating the promise, the function runs immediately, resolve('d') is called, so the promise is marked as fulfilled with value 'd'
//.then is put to Callstack
//Callstack run, the promise's .then callback executes, printing:d
//after Callstack is empty, Callback Queue pop the setTimeout callback function to Callstack and run

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");

//output 1 "start" "success"
//A new promise is created, resolve('success') marks the promise as resolved with "success"
//.then is put to Callstack
// after synchronous code, callstack run, the promise's .then callback executes, printing: success
