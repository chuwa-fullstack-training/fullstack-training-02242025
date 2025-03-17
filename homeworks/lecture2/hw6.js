// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length == 0) {
        return null;
    }
    let maxnum = list[0];
    for (let i = 1; i < list.length; i++) {
        maxnum = Math.max(list[i], maxnum);
    }
    return maxnum;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left =0;
    let right = list.length - 1;
    while(left < right) {
        [list[left], list[right]] = [list[right], list[left]];
        left++;
        right--;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 1;
    for(let i = 0; i < list.length; i++){
        if (list[i] == element) {
            count ++;
            if (count>=2) {
                return true; //return true if it occurs twice
            }          
        }
    }
    return false;
}

//console.log(largestElement([3, 1, 7, 9, 2]));
//console.log(reverseList([1,2,3]));
console.log(checkTwice([1,2,3], 2));
console.log(checkTwice([1,2,3], 6));