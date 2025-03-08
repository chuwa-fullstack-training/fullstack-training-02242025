// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if (!list || list.length === 0) {
        return null;
    }
    let largest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    for (let i = 0; i < list.length / 2; i++) {
        let temp = list[i];
        list[i] = list[list.length - 1 - i];
        list[list.length - 1 - i] = temp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    const count = list.filter(item => item === element).length;
    return count >= 2;
}