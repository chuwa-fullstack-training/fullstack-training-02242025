// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/** var is function scoped. After 5 iterations, the loop completes and i equals 5.
 * The 5 setTimeout callbacks were scheduled during the loop iterations but won't execute until after 1000ms.
 * After 1000ms, all 5 scheduled callbacks begin to execute.
 * Each callback references the same i variable, which now equals 5.
 * So it will print: 5 5 5 5 5
*/

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/** let is block scoped, creating a new i variable for each iteration.
* Each setTimeout callback captures its own iteration's i value in a closure.
* After 1 second, when the callbacks execute, each one refers to its own captured value of i.
* So it will print: 0 1 2 3 4
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/** var is function scoped. The IIFE creates a new scope for each iteration, capturing the value of i.
 * Each setTimeout callback captures its own iteration's i value in a closure.
 * After 1 second, when the callbacks execute, each one refers to its own captured value of i.
 * So it will print: 0 1 2 3 4
 */

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/**
 * Afrer timeout executes, fn has been reassigned to the new function
 * So it will print: I am another fn
 */

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * obj is passed by reference to setTimeout
 * obj name is changed before setTimeout excutes, setTimeout will print the updated object
 * So it will print: { name: 'another obj' }
 */
 