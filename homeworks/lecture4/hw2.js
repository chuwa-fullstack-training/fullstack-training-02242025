// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let double_arr = arr.map(a => a*2);

// 2. Given an array of numbers, return an array of numbers that are even.
let even_arr = arr.filter(a => a%2 ===0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let reversed_str = str.split("").reduce((acc, char) => char + acc, "");
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
let flatten_arr = arr.reduce((acc, a) => [...acc, ...a], []);

