// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
output: 55555
var is function scope. when running the console in 1 second, the for loop already completed and read i from same area in memory 

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
output: 01234
let is block scope. For each block, i will use a memory to store current value. Print the i after 1 second so read each i from each memory
// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
output 01234
this is immediately invoke function and will create new scope


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
output: I am another fn
print the fn in 1 second but the fn is overwrote immediately so it will output the latest value

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
output: another obj
smiliar reason as 4
