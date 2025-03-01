// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004

console.log(0.1 + 0.2 == 0.3);
// false
// it has precision loss due to these two decimal cannot be represented exactly by binary
// the sum of 0.1 + 0.2 slightly greater than 0.3

console.log(1 +  "2" + "2");
// "122"
// 1..toString(), then string concatenation

console.log(1 +  +"2" + "2");
// "32"
// '+' make "2" from string to number
// so 1 + 2 = 3, 3..toString(), then concatenate string "2" equal "32"

console.log(1 +  -"1" + "2");
// "02"
// '-' will convert string "1" to a negative number of -1
// 1 - 1 = 0, 0..toString(), then comncatenate string "2" equal "02"

console.log(+"1" +  "1" + "2");
// "112"
// first "1" convert to number 1
// 1..toString(), then concatenate string "1" and "2" to a new string "112"

console.log( "A" - "B" + "2");
// NaN2
// '-' is a number operation, is not valid on the string, So it will be NaN
// then concatenate String "2" 

console.log( "A" - "B" + 2);
// NaN
// "A" + "B" is NaN
// NaN add a number is NaN

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1"
// 0 is falsy, 1 is truthy
// so it return 1 as number

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1"
// 1 is truthy, it had short- circuit when the left value is true in the operator '||'
// it will skip second evaluation

console.log("0 && 1 = "+(0 && 1));
// "0 && 1 = 0"
// 0 is falsy, it will return 0 immediately
// and will ignore second evaluation when the left value is false in the operator '&&'

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2"
// 1 is truthy, so it will evaluate ssecond value in '&&' operator
// sencond value 2 is truthy as well, so return 2 as number

console.log(false == '0')
// false
// false transfer 0 in js, '0' also will transer to numner value as 0
// so 0 == 0 is true

console.log(false === '0')
// false
// '===' operator is not only compare value, it will also compare type
// there is not type transfer in the operator '==='
// boolean != string
