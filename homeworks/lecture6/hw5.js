// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  Promise.resolve()
    .then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 1000);
    }))
    .then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    }))
    .then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    }));
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((promiseChain, num) => {
    return promiseChain.then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  while (true) {
    console.log("red");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("green");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("yellow");
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

trafficLight();
