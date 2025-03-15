// Number data type
let num = 2023;
console.log(num);  // Outputs: 2023
console.log(typeof num);  // Outputs: number
// floating-point number
let float = 3.3;
// hexadecimal number / octal number / binary number
let hex = 0xf;
let oct = 0o17;
let bin = 0b1011;

// exponential number
let exp = 2e10;
// infinity / -infinity
let positive_inf = Number.POSITIVE_INFINITY;
let negative_inf = Number.NEGATIVE_INFINITY;
// NaN
let nan = Number.NaN;

// String data type
let str = "Hello, JavaScript!";
console.log(str);  // Outputs: Hello, JavaScript!
console.log(typeof str);  // Outputs: string
// string length
// string escape

// Boolean data type
let bool = true;
console.log(bool);  // Outputs: true
console.log(typeof bool);  // Outputs: boolean
console.log(Boolean(0));  // Outputs: false

// Object data type
let obj = {name: "John", age: 30};
console.log(obj);  // Outputs: { name: 'John', age: 30 }
console.log(typeof obj);  // Outputs: object

// Array data type
let arr = [1, 2, 3, 4, 5];
console.log(arr);  // Outputs: [ 1, 2, 3, 4, 5 ]
console.log(typeof arr);  // Outputs: object

// Null data type
let nullValue = null;
console.log(nullValue);  // Outputs: null
console.log(typeof nullValue);  // Outputs: object

// Undefined data type
let undefinedValue;
console.log(undefinedValue);  // Outputs: undefined
console.log(typeof undefinedValue);  // Outputs: undefined

// Symbol data type (unique, immutable, used less often)
let sym = Symbol();
console.log(sym);  // Outputs: Symbol()
console.log(typeof sym);  // Outputs: symbol

/*
UNDEFINED is when a variable is declared but not assigned any value,
NULL is when one intentionally want assign it no value
they are loosely equal (==) but not strictly equal (===)
*/

//coercion (implicit transform)
console.log(1+'a') // Outputs: '1a'

