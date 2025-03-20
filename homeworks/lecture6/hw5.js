// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  [1, 2, 3].reduce((acc, num) => {
    return acc.then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((acc, num) => {
    return acc.then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function trafficLight() {
  const lights = ['red', 'green', 'yellow'];
  const delays = {
    red: 5000,   
    green: 5000,  
    yellow: 1000  
  };

  while (true) { 
    for (const light of lights) {
      console.log(light);
      await delay(delays[light]); 
    }
  }
}

