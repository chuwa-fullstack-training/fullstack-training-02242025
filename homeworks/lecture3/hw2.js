/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    let num = 0;
    if(arguments.length == 1){
        num += arguments[0];
        return function sum(a){
            return num+ a;
        }
    }else{
        return arguments[0] + arguments[1];
    }
}

console.log(sum(2)(3));
console.log(sum(2,3));
