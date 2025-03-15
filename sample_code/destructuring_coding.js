'use strict'
//get and assign values from object instead of using dot notation

let a = {b:{c:1}, d:2, e:3};
const {b:{c:x}, d, e:y} = a;
console.log(x, d, y);

// simple if else
const age = 30;
let ageLarge = age < 10 ? 1: 2;

