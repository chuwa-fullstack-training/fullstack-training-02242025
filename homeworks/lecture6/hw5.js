// 1. use `promise` to print 1, 2, 3 in every 1 second
function callPrint(delay = 1000){
  return new Promise((resolve)=>{
    setTimeout(resolve, delay);
  })
}

async function print() {
  // your code here
  for (let i = 0; i < 3; i++){
    console.log(i+1);
    await callPrint(1000);
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

async function printList() {
  // your code here
  for (let i =0; i< nums.length; i++){
    console.log(nums[i]);
    await callPrint(1000);
  }
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let i = 0;
  options = ['red', 'green', 'yellow'];
  function change(){
    console.log(options[i]);
    i = (i+1)% options.length;
    setTimeout(change, 1000);
  }
  change();
}
