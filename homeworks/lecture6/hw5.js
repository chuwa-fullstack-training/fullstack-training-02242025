// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  Promise.resolve().then(
    () => {
      console.log(1);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  ).then(() => {
    conosle.log(2)
    return new Promise(resolve => setTimeout(resolve, 1000));
  }).then(() => {
    conosle.log(3)
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((prevPromise, num) => {
    return prevPromise.then(() => {
      console.log(num);
      return new Promise(resolve => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  function changeState(currentState) {
    console.log(currentState);
    
    let delay;
    let nextState;
    
    switch (currentState) {
      case "red":
        delay = 3000;
        nextState = "green";
        break;
      case "green":
        delay = 2000;
        nextState = "yellow";
        break;
      case "yellow":
        delay = 1000;
        nextState = "red";
        break;
    }
    setTimeout(() => {
      changeState(nextState);
    }, delay);
  }
  changeState("red");

}
