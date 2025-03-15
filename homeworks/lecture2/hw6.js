// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    return list.reduce((max, current) => (current > max ? current : max), -Infinity);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at left and right indices
      [arr[left], arr[right]] = [arr[right], arr[left]];
  
      // Move towards the center
      left++;
      right--;
    }
  
    return arr;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // method 1
    let count = 0;

    for (let item of arr) {
      if (item === element) {
        count++;
        if (count >= 2) {
          return true; 
        }
      }
    }
  
    return false;

    //method 2 using filter
    return arr.filter(item => item === element).length >= 2;

    //method 3 using reduce
    const counte = arr.reduce((acc, item) => acc + (item === element ? 1 : 0), 0);
    return counte >= 2;
}