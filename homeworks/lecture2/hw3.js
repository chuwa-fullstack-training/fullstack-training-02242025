// What would be the output of following code?
// Explain your answer.

console.log(0.3 + 0.2);
//0.30000000000000004
//js uses double-precision floating point(64 bit) and cannot accurately repsresent 0.1 and 0.2

console.log(0.1 + 0.2 == 0.3);
//false
//0.1 + 0.2 is not 0.3 in javascript

console.log(1 +  "2" + "2");
//122
//the number is converted to string and the result is a string concatenation

console.log(1 +  +"2" + "2");
//32
//operator + converts a string to a number

console.log(1 +  -"1" + "2");
//02
//operator - converts a string to a number

console.log(+"1" +  "1" + "2");
// 112

console.log( "A" - "B" + "2");
//NaN2
//A - B evaluates to NaN in javascript

console.log( "A" - "B" + 2);
//NaN
//NaN + 2 is NaN

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1

console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1
// 1 is trucy, and because of lazy evaluation, 1 is returned

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// 0 is falsy, so 0 is returned 

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// 1 is truthy and 2 is truthy and the second element is returned

console.log(false == '0')
// true
// == is weak equal, meaning equal after conversion also counts. '0' is a falsy value and converts to false
console.log(false === '0')
// false
// === is strong equal, meanning operands must be equal in value and type