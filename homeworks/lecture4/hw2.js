// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleNumbers(numbers) {   
    return numbers.map(num => num * 2);
}

// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
    return Array.from(str).reduce((acc, curr) => curr + acc, '');
}
console.log(reverseString("Hello World")); // "dlroW olleH"
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arrays) {
  return arrays.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    }
    return acc.concat(curr);
  }, []);
}
console.log(
  flattenArray([
    [0, 1],
    [2, 3],
    [4, [5, 6]],
  ])
); // [0, 1, 2, 3, 4, 5, 6]