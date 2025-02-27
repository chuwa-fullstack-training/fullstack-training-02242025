// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let largest = -Infinity;
    list.forEach(ele => {
        if(ele > largest) {
            largest = ele;
        }
    })
    return largest
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let start = 0;
    let end = list.length - 1;
    while(start < end) {
        let temp = list[start]
        list[start] = list[end];
        list[end] = temp
        start++
        end--
    }
    return list
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let frequency = {}
    for(let e of list) {
        if (e === element) {
            if(frequency[e]) {
                return true
            }
        }
        frequency[e] = 1
    }
    return false
}
