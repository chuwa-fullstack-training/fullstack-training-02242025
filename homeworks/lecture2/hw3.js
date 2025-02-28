// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004, float number added

console.log(0.1 + 0.2 == 0.3);
// false, as float number is not accurate, so 0.1 + 0.2 is not exactly 0.3

console.log(1 +  "2" + "2");
// 122, as 1 + "2" is string joint, and then "12" + "2" to "122"

console.log(1 +  +"2" + "2");
// 32， as +"2" changes string to number, and 1 + 2 = 3, and 3 + "2" = 32

console.log(1 +  -"1" + "2");
// 02, as -"1" is converted to -1 number, and then 1 + (-1) = 0, 0 + "2" = 02

console.log(+"1" +  "1" + "2");
// 112, as +"1" is 1, and it goes to 1 + "1" + "2"

console.log( "A" - "B" + "2");
// NaN2, as string minus always show value NaN, and NaN + "2" = NaN2

console.log( "A" - "B" + 2);
// NaN, becasue NaN + number is NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1, so (0 || 1) is 1, and then it is string combine

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1, so (1 || 2) means true || true, which returns true, and this gives true, and which comes to 1.

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0, as 0 is false, and any non 0 numbers && 0 is 0.

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 1, as non 0 numbers are true, and true and true gives true, which is 1 in numbers

console.log(false == '0')
// true, as == convert false and '0' to number, and false and '0' are all converted to 0.

console.log(false === '0')
// false, as === compares both value and type, and false is boolean, '0' is char.