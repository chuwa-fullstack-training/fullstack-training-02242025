function counter() {
    // implement here
    let count = 0;
    return function(input = 0) {
        count += input;
        return count;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8