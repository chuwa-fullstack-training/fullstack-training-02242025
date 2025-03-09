const { resolve } = require("path");

// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  Promise.resolve()
    .then(() => {
      console.log(1);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(2);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(3);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promiseChain, num) => {
    return promiseChain.then(() => {
      console.log(num);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  function red() {
    console.log("red");
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }
  function green() {
    console.log("green");
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  function yellow() {
    console.log("yellow");
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  function cycle() {
    red().then(green).then(yellow).then(cycle);
  }
  cycle();
}
