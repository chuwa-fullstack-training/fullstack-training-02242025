// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000 (floating-point precision errors)

console.log(0.1 + 0.2 == 0.3); // false 

console.log(1 +  "2" + "2"); // 122 (coercion)

console.log(1 +  +"2" + "2"); // 32 (++'2' means plus number)

console.log(1 +  -"1" + "2"); // 02

console.log(+"1" +  "1" + "2"); // 112 (firs 1 is number then concatenate)

console.log( "A" - "B" + "2"); // NaN2 (a concatenated string and first is NaN)

console.log( "A" - "B" + 2); // NaN (NaN +2)

console.log("0 || 1 = "+(0 || 1)); // 0||1=1

console.log("1 || 2 = "+(1 || 2)); // 1||2=1

console.log("0 && 1 = "+(0 && 1)); // 0&&1 = 0

console.log("1 && 2 = "+(1 && 2));// 1&&2=2

console.log(false == '0')// true loose equality (coercion)

console.log(false === '0')//false
