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

function doubled(nums){
    return nums.map((value)=>value*2);
}

function filterEven(nums){
    return nums.filter((value)=>valuee%2===0);
}

function reverseString(s){
    return s.split("").reduce((acc,value)=>{
        return value + acc;
    },"");
}

function flatten(nums){
    return nums.reduce((acc, value)=>{
        if(Array.isArray(value)){
            return acc.concat(flatten(value));
        }else{
            return acc.concat(value);
        }
    }, []);
}