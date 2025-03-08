/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length === 1) {
        const firstArg = arguments[0];
        return function(secondArg) {
            return firstArg + secondArg;
        }
    }
    return arguments[0] + arguments[1];
}
