// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here

    if(list.length === 0) return null;
    let largest = list[0];

    for (let n of list){
        if (n > largest){
            largest = Math.max(n, largest);
        }
    }
    return largest;
}
// Test Cases
console.log(largestElement([3, 5, 1, 8, 2])); // Output: 8
console.log(largestElement([-5, -2, -10])); // Output: -2
console.log(largestElement([])); // Output: null

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here

    let left = 0, right = list.length-1;

    while ( left < right){
        [list[left],list[right] = list[right],list[left]];
        left++;
        right--;
    }
    return list;

}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let checkEle = 0;

    for (let n of list){
        if (n === element){
            checkEle++;
            if ( checkEle >= 2 ){
                return true;
            }
        }
    }
    return false;
}