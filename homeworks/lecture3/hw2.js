/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a, b) {
    if(arguments.length === 2) {
        //console.log(arguments)
        return a + b
    } else {
        //console.log(arguments)
        //another way: return sum.bind(null, a)
        return function(b) {
            return a + b;
        }
    }
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
