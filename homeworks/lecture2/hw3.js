// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// binary math

console.log(0.1 + 0.2 == 0.3);
//False
// 0.1+0.2 == 0.30000000000000004

console.log(1 + "2" + "2");
//122
// 1 is turned into a string when added to "2", it becomes "12"

console.log(1 + +"2" + "2");
//"32"
// + converts "2" into the number 2 so 1+2 = 3

console.log(1 + -"1" + "2");
//"02"
//-"1" turns "1" into -1, 1+(-1)=0

console.log(+"1" + "1" + "2");
//"112"
// -"1" turns "1" into a number 1

console.log("A" - "B" + "2");
//NaN
// letters cannot be substracted

console.log("A" - "B" + 2);
//NaN2

console.log("0 || 1 = " + (0 || 1));
//"0 || 1 = 1"
// 0 is false 1 is true

console.log("1 || 2 = " + (1 || 2));
//"1 || 2 = 1"\
//stop at the first truthy value

console.log("0 && 1 = " + (0 && 1));
//"0 && 1 = 0"
// 0 is false

console.log("1 && 2 = " + (1 && 2));
//"0 && 1 = 2"
//both are true, return the last one

console.log(false == "0");
//True
//types are converted into numbers

console.log(false === "0");
//False
//"====" checks both value and type, but their types are different
