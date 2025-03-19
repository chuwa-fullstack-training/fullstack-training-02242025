// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  new Promise((resolve) => {
    setTimeout(() => {
       console.log(1)
       resolve()
    }, 1000);
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
         console.log(2)
         resolve()
      }, 1000);
    })
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
         console.log(3)
         resolve()
      }, 1000);
    })
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];
// //wrong answer:
// // setTimeout is asynchronous, meaning that setTimeout will not block the execution of the next iteration
// // of the reduce loop. This means that reduce will
// // immediately continue to the next iteration without waiting for setTimeout to complete.
// //f there is no explicit return value from the callback inside the .then(), the state of the promise chain is still considered resolved.
// //wrong one
// function printList(nums) {
//   nums.reduce((promise, ele) => {
//     return promise.then(() => {
//       setTimeout(() => console.log(ele), 1000) //need to have the resolve inside settimeout call back otherwise the implicit return will run with settimeout and not wait until 1000
////need to wrap the settimeout with promise constructor
//     })
//   }, Promise.resolve())
// }

function printList(nums) {
  nums.reduce((promise, ele) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() =>{
          console.log(ele)
          resolve()
        }, 1000)
      })
    })
  }, Promise.resolve())
}
// printList(nums)


// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

// //await is for a promise
// async function trafficLight(delay) {
//   let lights = ["red", "green", "yellow"]
//   for(let i of lights) {
//     await new Promise(resolve => {
//       setTimeout(() => {
//         console.log(i)
//         resolve()
//       }, delay)
//     })
//   }
// }
// trafficLight(1000)


function trafficLight(delay) {
  let lights = ["red", "green", "yellow"]
  lights.reduce((promise, ele) => {
    return promise.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(ele)
          resolve()
        }, delay)
      })
    })
  }, Promise.resolve())
}

// trafficLight(1000)
