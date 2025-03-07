// 1. use `promise` to print 1, 2, 3 in every 1 second
function delay(time){
  return new Promise(resolve=>setTimeout(resolve, time));
}

function print() {
  // your code here
  let value = 1;
  delay(1000)
    .then(()=>{
      console.log(value++);
      return delay(1000);
    })
    .then(()=>{
      console.log(value++);
      return delay(1000);
    })
    .then(()=>{
      console.log(value++);
    })
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, value, index, array) => {
    return promise.then(()=>{
      console.log(value)
      if(index < array.length - 1){
        return delay(1000);
      }
    })
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  // your code here
  while(true){
    console.log("red");
    await delay(3000)

    console.log("green");
    await delay(3000)

    console.log("yellow");
    await delay(3000)
  }
}


//while loop does not work
//trafficLight() as a parametere will evoke the function immediately and pass in the result as the parameter
function trafficLight(){
    delay(1000)
      .then(()=>{
        console.log("red");
        return delay(1000);
      })
      .then(()=>{
        console.log("green");
        return delay(1000);
      })
      .then(()=>{
        console.log("yellow");
        return delay(1000);
      })
      .then(trafficLight);
}

trafficLight();
