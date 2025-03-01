// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); //0.30000000000000004

console.log(0.1 + 0.2 == 0.3); //false, because 0.1 and 0.2 are floating numbers

console.log(1 +  "2" + "2"); 
// "122"
// 1 +"2" convert the number to a string and operates as string concatenation

console.log(1 +  +"2" + "2");
// "32"
// +"2" unary plus convert string to number, so 1++"2" equals to 3, then perform the normal string concatenation

console.log(1 +  -"1" + "2");
// "02"
// -"1" unary minus convert string to number, so 1 +  -"1" equals to 0, then perform the normal string concatenation

console.log(+"1" +  "1" + "2");
// "112"
// +"1" convert string to number, rest of it still performs normal string concatenation

console.log( "A" - "B" + "2");
// "NaN2"
// String A and B cannot convert to number, so the result is NaN. When adding NaN to a string, 
// NaN will convert to string "NaN", then performs string concatenation with "2"


console.log( "A" - "B" + 2);
// NaN
// The result of "A" - "B" is NaN because A and B cannot convert to number.
// NaN plus any number will still be NaN

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1" 
// (0 || 1) this part equals to 1, because OR operator only evalutes 1 because 0 is a falsy value
// "0 || 1 = " + 1 equals to "0 || 1 = 1" by using string concatenation

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1"
// (1 || 2) this part equals to 1, because OR operator evaluates left element first if it's not false

console.log("0 && 1 = "+(0 && 1));
// "0 && 1 = 0"
// && operator always return the first falsy value, so 0 && 1 equals to 0

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2"
// when both elements are truthy, && operator return the last element which is 2

console.log(false == '0')
// true
// 0 is falsy value

console.log(false === '0')
// false
// === is strict equality operator which checks both the value and type of the operands are the same
// false is boolean and "0" is string, is it return false 