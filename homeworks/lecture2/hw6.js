// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
     return Math.max(list);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for(let i = 0, j=list.length-1; i<j; i++, j--){
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for(let i in list){
        if(i===element){
            count++;
        }
        if(count==2){
            return true;
        }
    }
    return false; 
}
