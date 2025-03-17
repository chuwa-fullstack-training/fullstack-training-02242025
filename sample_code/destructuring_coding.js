'use strict'
//get and assign values from object instead of using dot notation

let a = {b:{c:1}, d:2, e:3};
const {b:{c:x}, d = '1', e:y} = a; // set default value to d
console.log(x, d, y);

// simple if else
const age = 30;
let ageLarge = age < 10 ? 1: 2;

// sum using reduce
function sum(x,y) {
    return x+y;
}
let arr = [1,2,3];
arr.reduce(sum);

// Destructuring an array
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// Desctructuring in function parameters
const printPerson = ({ name, age, city }) => {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  };
  
  printPerson(person); // Output: Name: John, Age: 30, City: New York
  
  // Desctructuring in function parameters with a default value
  const printPersonWithDefault = ({ name, age, city = 'Santa Clara' }) => {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  };
  
  printPersonWithDefault(person); // Output: Name: John, Age: 30, City: New York



