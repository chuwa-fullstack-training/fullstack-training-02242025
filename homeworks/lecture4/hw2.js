// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let arr = [1, 2, 3]
arr.map((e) => e*2)

// 2. Given an array of numbers, return an array of numbers that are even.
arr.filter((e) => e%2 === 0)

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let str = "Hello World"
let rsl = str.split("").reduce((acc, ele) => ele + acc, "")
    //Strings are immutable in JavaScript,cannot assign values to specific indexes
    //acc[arr.length - index - 1] = ele
console.log(rsl)

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr1 = [[0, 1], [2, 3], [4, [5, 6]]];
function flat(arr) {
    return arr.reduce((acc, ele) => {
        if(Array.isArray(ele)) {
            acc.push(...flat(ele))
        } else {
            acc.push(ele)
        }
        return acc
    } , [])
}
console.log(flat(arr1))

// function flat2(arr, rsl) {
//     for(let ele of arr) {
//         if(Array.isArray(ele)) {
//             flat2(ele)
//         } else {
//             rsl.push(ele)
//         }
//     }
//     return rsl
// }
//acc (the accumulator) is a new array created in each call to reduce. This is important because acc is local to each iteration
