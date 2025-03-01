// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004, 浮点数精度问题

console.log(0.1 + 0.2 == 0.3);
//false，同上，精度问题，应该等于那一大串

console.log(1 +  "2" + "2");
//122，数字加上两个字符串

console.log(1 +  +"2" + "2");
//"32" +“2”变成数字了，1+2 = 3，再加字符串

console.log(1 +  -"1" + "2");
//02 同上，0+2两个字符串

console.log(+"1" +  "1" + "2");
//112，数字加上两个字符串，但还是一样的道理

console.log( "A" - "B" + "2");
//NAN2 两个字符串相减就是NAN，然后加上字符串

console.log( "A" - "B" + 2);
//NAN，同上但是NAN加上数字还是NAN

console.log("0 || 1 = "+(0 || 1));
//"0 || 1 = 1"，前面字符串，加上后面运算，或运算取真

console.log("1 || 2 = "+(1 || 2));
//"1 || 2 = 1"，字符串加上运算，或运算取小真

console.log("0 && 1 = "+(0 && 1));
//"0 && 1 = 0"，同上，与运算取假

console.log("1 && 2 = "+(1 && 2));
//"1 && 2 = 2"，同上，与运算取大真

console.log(false == '0')
//true，false也是0

console.log(false === '0')
//false，跟字符串比啥