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

const doubleNumbers = (arr) => arr.map((num) => num * 2);
console.log(doubleNumbers([1, 2, 3, 4])); // [2, 4, 6, 8]

const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

const reverseString = (str) =>
  str.split("").reduce((rev, char) => char + rev, "");
console.log(reverseString("Hello World")); // "dlroW olleH"

const flattenArray = (arr) =>
  arr.reduce(
    (flat, subArr) =>
      flat.concat(Array.isArray(subArr) ? flattenArray(subArr) : subArr),
    []
  );
console.log(
  flattenArray([
    [0, 1],
    [2, 3],
    [4, 5],
  ])
); // [0, 1, 2, 3, 4, 5]
console.log(
  flattenArray([
    [0, 1],
    [2, 3],
    [4, [5, 6]],
  ])
); // [0, 1, 2, 3, 4, 5, 6]
