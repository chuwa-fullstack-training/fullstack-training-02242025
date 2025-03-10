// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      setTimeout(() => {
        console.log(2);
        setTimeout(() => {
          console.log(3);
          resolve();
        }, 1000);
      }, 1000);
    }, 1000);
  });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((acc, num) => {
    return acc.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      });
    }, Promise.resolve());
  });
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const colors = ["red", "green", "yellow"];
  let currentIndex = 0;

  function showNextLight() {
    console.log(colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(showNextLight, 1000);
  }

  showNextLight();
}
