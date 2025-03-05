// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004 because when displaying 0.1, it's not exactly 0.1 the actauly number used is slightly larger than 01. therefore the 
// result is larger than 0.3

console.log(0.1 + 0.2 == 0.3);
// false, the reason is explained in #1

console.log(1 +  "2" + "2");
// "122", when number + string, the + concatenates them

console.log(1 +  +"2" + "2");
// "32", 1 +  +"2" => 3 because the 2nd + is unary operator here, then we do 3+"2", where + concatenates them.

console.log(1 +  -"1" + "2");
// "02", 1 +  -"1" => 0, then concate with "2".

console.log(+"1" +  "1" + "2");
// "112",  +"1" +  "1" => 1+"1" => "11", then "11" + "2"=> "112"

console.log( "A" - "B" + "2");
//"NaN2",  "A"-"B" => Not a number so it's NaN, then NaN+"2" => "NaN2"

console.log( "A" - "B" + 2);
//NaN, because 2 is a number now.

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1, logical OR 0||1 = 1.

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1, logical OR 1||2 = 1.

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0, logical AND 0&&1 = 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2, logical AND 1&&2 = 2, both 1 and 2 are true here

console.log(false == '0')
// true, == here is a coercion, where false is 0, and after coercion '0' is 0, so 0 == 0 => true

console.log(false === '0')
// false, === here is strict equality, false is boolean and '0' is a string
