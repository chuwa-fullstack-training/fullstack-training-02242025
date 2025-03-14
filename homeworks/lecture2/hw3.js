// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000000004, because 0.1, 0.2 cannot be 
//represented exactly in binary, so there is precision error

console.log(0.1 + 0.2 == 0.3); // false, as 0.1+0.2 = 0.30000000000000004 not equal to 0.3

console.log(1 +  "2" + "2"); // "122", 1 was converted to string "1", so result is "122"

console.log(1 +  +"2" + "2");// "32", +"2" -> the unary plus converts "2" to number 2,
// so 1+ +"2" -> 1+2 = 3, 3 + "2", 3 is converted to string 3, so result is "32"

console.log(1 +  -"1" + "2"); // "02", -"1" -> convert the string "1" to number -1,
// 1-1 = 0, 0 was converted to string "0", "02"

console.log(+"1" +  "1" + "2"); // "112" string 1 connects 1 then connects 2, so the reuslt is string "112"

console.log( "A" - "B" + "2");
//NaN2, "A" "B" are strings, js failed to convert "A", "B" tp strings, so NaN, Nan + "2"-> "NaN2"
console.log( "A" - "B" + 2);
// "A" - "B" -> NaN, Any arithmetic operation involving NaN results in NaN, so NaN + 2 is NaN
console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1, "0 || 1 = " is a string, (0 || 1)-> 0 is false, 1 is true, || is or, result is 1, 
// so "0 || 1 = "+1 -> 1 is converted to "1", so the result is 0 || 1 = 1
console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1, (1 || 2)-> 1 is true, since 1 is already true, || won't evaluate the second operand
// "1 || 2 = " is string, 1 is converted to string "1", so the result is 1 || 2 = 1
console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0, 0 && 1-> false and true is false, so it is 0
//"0 && 1 = " is string, so 0 is converted to string "0", then result is "0 && 1 = 0"
console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2, &&: If all values are truthy, it returns the last truthy value.
// so 1 && 2 returns 2, "1 && 2 = " is tring, 2 is converted to string "2" 
// so the result is "1 && 2 = 2"
console.log(false == '0')
// true, false converted to 0, string "0" is converted to 0
//0 == 0 is true. 
console.log(false === '0')
// false, === has no type coercion, false is boolean, "0" is tring
// so false