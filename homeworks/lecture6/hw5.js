// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return Promise.resolve() //Promise.resolve() creates an immediately resolved promise
  .then(() => {
    console.log(1);
    return delay(1000)
  })
  .then(() => {
    console.log(2);
    return delay(1000)
  })
  .then(() => {
    console.log(3);
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  // Use reduce to create a chain of promises
  nums.reduce((accumulator, num) => {
    // Wait for the previous promise (accumulator) to resolve before continuing
    return accumulator.then(() => {
      console.log(num);
      return delay(1000)
    })}, Promise.resolve()) // Start with Promise.resolve() as our initial accumulator (this immediately resolves)
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  function cycle() {
    return Promise.resolve()
    .then(() => {
      console.log('red')
      return delay(1000)
    })
    .then(() => {
      console.log('green')
      return delay(1000)
    })
    .then(() => {
      console.log('yellow')
      return delay(300)
    })
    .then(() => cycle())
  }
}
