// Passing by value
function incrementValue(value) {
  value++;
}

let num = 5;
incrementValue(num);
console.log(num); // Output: 5

// Passing by reference
function incrementObjectValue(obj) {
  obj.value++;
}

let obj = { value: 5 };
incrementObjectValue(obj);
console.log(obj.value); // Output: 6
