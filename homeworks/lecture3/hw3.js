function counter() {
    // implement here
    let counts = 0;
    return function(n=0) {
        return counts += n;
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8