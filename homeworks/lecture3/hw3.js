function counter() {
    // implement here
    var res=0;
    return function(a){
        if (a!== undefined){
            res += a
        }
    return res;
    }
    
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
