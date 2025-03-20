// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); 
 // [2, 4, 6, 8, 10]

// 2. Given an array of numbers, return an array of numbers that are even.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // [2, 4, 6, 8]


// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";

const reversedStr = str.split('').reverse().join('');  // Using split, reverse, join to reverse the string

console.log(reversedStr);  // "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr1 = [[0, 1], [2, 3], [4, 5]];

const flattened1 = arr1.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened1);  // [0, 1, 2, 3, 4, 5]

const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];

const flattened2 = arr2.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened2);  // [0, 1, 2, 3, 4, [5, 6]]

