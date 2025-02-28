// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let i = list[0]
    for (let j of list) {
        if (i < j) {
            i = j;
        }
    }
    return i;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let a = 0
    let b = list.length - 1
    while (a < b) {
        let c = list[a]
        list[a] = list[b]
        list[b] = c
        a++;
        b--;
    }
    return list
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let first = false;
    for (let i of list) {
        if (element === i) {
            if (first) {
                return true;
            } else {
                first = true;
            }
        }
    }
    return false;
}