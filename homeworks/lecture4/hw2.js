// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

// 2. Given an array of numbers, return an array of numbers that are even.

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
  }
  
  function evenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  function reverseString(str) {
    return str.split('').reduce((acc, char) => char + acc, '');
  }
  
  function flattenArray(arr) {
    return arr.reduce((acc, item) => 
      Array.isArray(item)
        ? acc.concat(flattenArray(item))
        : acc.concat(item)
    , []);
  }
  

  const numbers = [1, 2, 3, 4];
  console.log(doubleNumbers(numbers)); 
  

  console.log(evenNumbers(numbers));
  

  console.log(reverseString("Hello World"));

  const arr1 = [[0, 1], [2, 3], [4, 5]];
  console.log(flattenArray(arr1));
  
  const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
  console.log(flattenArray(arr2));
  