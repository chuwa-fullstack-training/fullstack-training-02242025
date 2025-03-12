// 1. use `promise` to print 1, 2, 3 in every 1 second
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function print() {
    // your code here
  let i = 1;
  function printNext() {
    if (i > 3) return;
    console.log(i);
    i++;
    delay(1000).then(printNext);
  }
  printNext();
}

//print();


// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
nums.reduce((acc, num) => {
return acc.then(
  () => {
    console.log(num);
    return new Promise(resolve => setTimeout(resolve, 1000));
  }
);  
}, Promise.resolve())
}


printList();


// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
const lights = ["red", "green", "yellow"];

function trafficLight() {
  // your code here
  let i = 0;

  function helper() {
    return new Promise(resolve => 
      {
        console.log(lights[i]);
        i = (i + 1) % lights.length;
        setTimeout(resolve, 1000);
      }).then(helper);
  } 
  helper();
}
//trafficLight();
