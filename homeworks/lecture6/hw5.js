// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  delay(1000)
    .then(() => {
      console.log(1);
      return delay(1000);
    })
    .then(() => {
      console.log(2);
      return delay(1000);
    })
    .then(() => {
      console.log(3);
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return delay(1000);
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  let index = 0;

  setInterval(() => {
    console.log(lights[index]);
    index = (index + 1) % lights.length;
  }, 1000);
}
