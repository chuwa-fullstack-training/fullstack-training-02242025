// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004，js store number in its binary form and will lead to loss of precision

console.log(0.1 + 0.2 == 0.3);
//false

console.log(1 +  "2" + "2");
//"122" implicit type coercion

console.log(1 +  +"2" + "2");
//32
//the operand is not a number, the unary plus converts it into a number.

console.log(1 +  -"1" + "2");
//02
//The -"1" converts the string "1" into a number and negates it.

console.log(+"1" +  "1" + "2");
//112

console.log( "A" - "B" + "2");
//Output: "NaN2"
//trying to subtract A and B but conversion fails so NaN

console.log( "A" - "B" + 2);
//Output: NaN + 2
// Final Output: NaN

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1

console.log("1 || 2 = "+(1 || 2));
//"1 || 2 = 1"
//lazy evaluation

console.log("0 && 1 = "+(0 && 1));
//"0 && 1 = 0"
//0 is falsy

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
//both truthy the second element is returned

console.log(false == '0')
//true
//== operator performs type coercion, convert both to numbers before comparing

console.log(false === '0')
//false
//== check both type and value
