/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    let result = 0
    if (arguments.length >= 2) {
        for (let index = 0; index < arguments.length; index++) {
            result += arguments[index]
        }
        return result
    }

    const firstNumber = arguments[0]
    function addNumber(secondNumber) {
        return firstNumber + secondNumber
    }
    return addNumber
}

console.log(sum(2, 3, 4, 5));
console.log(sum(2)(3))