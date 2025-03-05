// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function map(array) {
    return array.map(num => num * 2)
}

// 2. Given an array of numbers, return an array of numbers that are even.
function filter(array) {
    return array.filter(num => num % 2 === 0)
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reduce(str) {
    return str.split('').reduce((prev, curr) => curr + prev, '')
}

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function flatten(array) {
    return array.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            return prev.concat(flatten(curr))
        } else {
            return prev.concat(curr)
        }
    }, [])
}


const arr = [1, 2, 3]
console.log(map(arr))
console.log(filter(arr))
console.log(reduce("array"))

const arr1 = [[0, 1], [2, 3], [4, 5]];
console.log(flatten(arr1))