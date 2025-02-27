// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.3

console.log(0.1 + 0.2 == 0.3);
//true

console.log(1 +  "2" + "2");
//"122" implicit type coercion

console.log(1 +  +"2" + "2");
//throw error

console.log(1 +  -"1" + "2");
//throw error

console.log(+"1" +  "1" + "2");
//throw error

console.log( "A" - "B" + "2");
//Output: "NaN2"
//trying to subtract A and B but conversion fails so NaN

console.log( "A" - "B" + 2);
//Output: NaN + 2
// Final Output: NaN

console.log("0 || 1 = "+(0 || 1));
//

console.log("1 || 2 = "+(1 || 2));

console.log("0 && 1 = "+(0 && 1));

console.log("1 && 2 = "+(1 && 2));

console.log(false == '0')
//true
//== operator performs type coercion, convert both to numbers before comparing

console.log(false === '0')
//false
//== check both type and value
