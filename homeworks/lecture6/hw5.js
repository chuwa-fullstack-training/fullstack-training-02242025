// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  let count = 1;
  function next() {
    if (count <= 3) {
      console.log(count);
      count++;
      setTimeout(next, 1000);
    }
  }
  next();
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  function changeLight(color, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, delay);
    });
  }

  function cycle() {
    changeLight("red", 1000)
      .then(() => changeLight("green", 1000))
      .then(() => changeLight("yellow", 1000))
      .then(cycle);
  }

  cycle();
}

trafficLight();
