// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
0.30000000000000004
//Floating precision error in JavaScript, decimal values cannot be stored precisely in binary but stored as repeating.

console.log(0.1 + 0.2 == 0.3);
false
//same reason as above, floating precision error

console.log(1 +  "2" + "2");
122
//Type coercion that automatically convert type number to type string, 1 was converted to "1" as a string and concated to the following strings.

console.log(1 +  +"2" + "2");
32
// unary operator +"2" converted "2" to 2, so 1+2 is operated first = 3, then 3+"2" is the same as above covert 3 to "3" then concated to "32"

console.log(1 +  -"1" + "2");
02
//Similar to last question, unary operator -"1" converted "1" to 1, so 1 + -1 operated = 0, then 0 converted to "0" in 0 + "2", concated to "02".

console.log(+"1" +  "1" + "2");
112
//unary operator converted "1" to 1 first, then 1 + "1" converted it back to "1" and concated to "11" then concated to "112"

console.log( "A" - "B" + "2");
NaN2
//"A" is not a number and cannot be converted to a number, so was "B", so "A"-"B" is not a number(NAN), then NAN(number type) converted to string in the following operation NAN + "2", concated to "2", which is a string, so the result is NAN2.

console.log( "A" - "B" + 2);
NAN
//"A"-"B" is not a number(NAN), 2 is a number, NAN + any number is still NAN.

console.log("0 || 1 = "+(0 || 1));

console.log("1 || 2 = "+(1 || 2));

console.log("0 && 1 = "+(0 && 1));

console.log("1 && 2 = "+(1 && 2));

console.log(false == '0')

console.log(false === '0')
