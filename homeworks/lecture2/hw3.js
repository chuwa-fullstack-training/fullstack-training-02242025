// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
//reason: javascript uses binary format to store values. But decimal values cannot be excatly prsented. so the actual output close to 0.3
//but not sequal to 0.3
console.log(0.1 + 0.2 == 0.3);
//false
console.log(1 +  "2" + "2");
//122, 1 will convert to string
console.log(1 +  +"2" + "2");
//32, 2 is converted to number and calculate 1+2=3
console.log(1 +  -"1" + "2");
//02, same as above
console.log(+"1" +  "1" + "2");
//112, same as above
console.log( "A" - "B" + "2");
//NaN2 . A and B doesn't make numberical sense. So A-B generate NaN. Is a string and concatenate a string 2
console.log( "A" - "B" + 2);
//NaN, 2 is not string so not.
console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1, string concatenate a boolean
console.log("1 || 2 = "+(1 || 2));
//0 || 1 = 1, string concatenate a boolean
console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
console.log(false == '0')
//true, type converstion convert false to 0 and '0' to 0
console.log(false === '0')
//false, equal check between boolean to string