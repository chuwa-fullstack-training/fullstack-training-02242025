function counter() {
    let num = 0;
    return function(a){
        if(a === undefined){
            return num;
        }else{
            num = a+num;
            return num;
        }
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
