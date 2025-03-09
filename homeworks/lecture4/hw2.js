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

function doubleNumber(arr) {
  return arr.map((x) => x * 2);
}

function filterEvens(arr) {
  return arr.filter((x) => x % 2 === 0);
}

function reverseString(str) {
  return str.spilt("").reduce((acc, char) => char + acc, "");
}

function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return flattenArray(item).reduce((innerAcc, x) => {
        innerAcc[innerAcc.length] = x;
        return innerAcc;
      }, acc);
    } else {
      acc[acc.length] = item;
      return acc;
    }
  }, []);
}
