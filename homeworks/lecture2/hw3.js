// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.300000000000004  use floating-point arithmetic

console.log(0.1 + 0.2 == 0.3); //true 0.300000000000004 !== 0.3

console.log(1 +  "2" + "2"); //“122”

console.log(1 +  +"2" + "2");//“32”  2 converts "2" to 2  1+2 = 3  "3"+ "2" ="32"

console.log(1 +  -"1" + "2");// 1 + (-1) = 0 "0"+ "2" = "02"

console.log(+"1" +  "1" + "2");//“122”

console.log( "A" - "B" + "2");// "NaN2"  "A" -"B" not number => "NaN" + "2" = "NaN2"

console.log( "A" - "B" + 2);//"NaN"  "NaN" + 2  is number not string still NaN

console.log("0 || 1 = "+(0 || 1));//"0 || 1 = 1" || or operator reutrn the first truthy vlaue 0 is false but 1 is true

console.log("1 || 2 = "+(1 || 2));//"1 || 2 = 1"  1 is first true value

console.log("0 && 1 = "+(0 && 1));//"0 && 1 = 0"  && return first false value 0 is false

console.log("1 && 2 = "+(1 && 2));//"1 && 2 = 2"  && if no false value return last true value

console.log(false == '0') // true  concerts to "0" to false  false == false  -> true

console.log(false === '0') // false can not convert type so is false
