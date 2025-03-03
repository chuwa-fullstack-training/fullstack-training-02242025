// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max_item=list[0];
    if (list.length<2) return max_item;
    for(let i =1; i<list.length; i++){
        max_item=Math.max(max_item, list[i]);
    }
    return max_item;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let l= 0, r=list.length-1;
    while (l<r){
        let temp = list[r];
        list[r] = list[l];
        list[l] = temp;
        l++;
        r--;
    }
    return list;
    
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let i = 0;
    let count=0;
    while (i < list.length){
        if (list[i] == element) count++;
        if (count >=2) return true;
        i++;
    }
    
    return false;
}
