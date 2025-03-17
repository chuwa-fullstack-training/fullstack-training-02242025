// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

let doubleArr = (arr) => arr.map(num => num * 2);

// 2. Given an array of numbers, return an array of numbers that are even.

let filterArr = (arr) => arr.filter(num => num % 2 === 0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let reverseArr = (str) => str.split('').reduce(function (acc,curr) {
    acc = curr + acc;
    return acc;
}, '');
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
let flattenArr = (arr) => arr.reduce(function (acc, curr) {
    acc.concat(Array.isArray(curr) ? flattenArr(curr) : curr);
    return acc;
}, []);