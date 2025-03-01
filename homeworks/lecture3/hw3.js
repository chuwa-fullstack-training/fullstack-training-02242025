function counter() {
    // implement here
    let count = 0;
    return function (){
        if(arguments.length == 0) return count;
        count += arguments[0];
        return count;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8