// What would be the output of following code?
// Explain your answer.
console.log(0.1 + 0.2);
//0.30000000000000004
//Because the representation of floating points in JavaScript follows the IEEE-754 format. It is a double-precision format where 64 bits are allocated for every floating point.
console.log(0.1 + 0.2 == 0.3);
//false
//Due to this binary representation, some decimal fractions cannot be represented exactly, leading to small rounding errors.
console.log(1 +  "2" + "2");
//122
//The first element is a number and last two are strings, so they will be treated as strings and concatenated.
console.log(1 +  +"2" + "2");
//32
//Though the second element is a  string, the unary plus operator converts it to a number.
console.log(1 +  -"1" + "2");
//02
//though the second element is a  string, the unary minus operator converts it to a number.
console.log(+"1" +  "1" + "2");
//112
//The first element is a string and then the rest are strings, so they will be treated as strings and concatenated.
console.log( "A" - "B" + "2");
//NaN2
//The substraction operator can not be applied on strings,so it will return NaN. After that NaN will be contacted with 2.
console.log( "A" - "B" + 2);
//NaN
//As I mentioned above, the substraction operator can not be applied on strings,so it will return NaN. Any number added to NaN will still return NaN.
console.log("0 || 1 = "+(0 || 1));
//“0｜｜1=1”
//“0｜｜1=1” is a string. The logical OR operator returns the first operand if it is true, so it will return 1. And then concatenate it with the string.
console.log("1 || 2 = "+(1 || 2));
//“1｜｜2=1”
//The same logic as the one I mentioned above. String concatenation.
console.log("0 && 1 = "+(0 && 1));
//“0 && 1 =0”
//When it comes to logic AND operator, it will return the first operand if it is false. In this case, 0 is false, so it will return 0.
console.log("1 && 2 = "+(1 && 2));
//“1 && 2 =2”
//The second operand is false, so it will return the second operand.
console.log(false == '0')
//true
//When comparing a boolean with a string, the string will be converted to a number. So '0' will be converted to 0. And two euqal signs mean loose equality. It will compare the value. In this case, the value is the same, so it will return true.
console.log(false === '0')
//false  
//Three equal signs mean strict equality. It will compare the type and the value. In this case, the type is different, so it will return false.