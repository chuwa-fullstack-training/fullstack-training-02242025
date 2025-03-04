function counter() {
    let rsl = 0
    function count(a) {
        if(arguments.length === 1) {
            rsl += a
        }
        return rsl
    }
    return count
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
