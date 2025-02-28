// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// cannot be represented exactly in binary, causing a precision error
// JavaScript uses floating-point arithmetic
console.log(0.1 + 0.2 == 0.3);
// false
// precision error
console.log(1 + "2" + "2");
// 122
// string concatenation
console.log(1 + +"2" + "2");
// 32
// Unary + (+"2") converts "2" into 2
// then string concat
console.log(1 + -"1" + "2");
// 02
// unary convert to -1
// then string concat
console.log(+"1" + "1" + "2");
// 112
// Unary + (+"1") converts "1" into 1
// then string conat
console.log("A" - "B" + "2");
// NaN2;
// "A" - "B" is NaN (Not a Number)
// NaN + "2" is NaN2
console.log("A" - "B" + 2);
// NaN
// "A" - "B" is NaN (Not a Number)
// NaN + 2 is NaN (any operation with NaN gives NaN)
console.log("0 || 1 = " + (0 || 1));
// 1
// gives out first true value 1
console.log("1 || 2 = " + (1 || 2));
// 1
// gives out first true value 1
console.log("0 && 1 = " + (0 && 1));
// 0
// gives out first false value
console.log("1 && 2 = " + (1 && 2));
// 2
// returns the last value if both are truthy.
console.log(false == "0");
// true
// zero means false
console.log(false === "0");
// false
// strict equality
