/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (b !== undefined) {
        return a + b; 
    } 
    return function(c) {
        return a + c;  
    };
}
console.log(sum(2)(3) === 5);  
console.log(sum(2, 3) === 5);  