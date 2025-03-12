const { resolve } = require("path");

// 1. use `promise` to print 1, 2, 3 in every 1 second
async function print() {
   // your code here
  for (let i = 1; i <= 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(i);
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(new Promise(resolve => setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000)))
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  const delays = [12000, 10000, 3000];
  let index = 0;

  function change() {
    console.log(lights[index]);
    setTimeout(change, delays[index]);
    index = (index + 1) % lights.length;
  }

  change();
}
