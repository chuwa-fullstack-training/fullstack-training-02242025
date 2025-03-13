// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const nums = [1,2,3,4,5];
let double = nums.map(nums => nums*2 )

console.log(double)

// 2. Given an array of numbers, return an array of numbers that are even.
let evenNumber = nums.filter(nums => nums % 2===0);
console.log(evenNumber)

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
s =  "Hello World"
let reversed = s.split("").reduce((acc,curr) =>[curr,...acc],[]).join("")
console.log(reversed)


/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * ;
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr = [[0, 1], [2, 3], [4, 5]];

let Flatten = (arr) => arr.reduce((acc,curr) =>acc.concat(curr),[]);

console.log(Flatten(arr))







