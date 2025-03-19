// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // 5, 5, 5, 5, 5 becaue var has function scope and so all callback has the input as i == 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0,1,2,3,4 because let has block scope, so each callback has unique i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0,1,2,3,4 because it uses IIFE and has a private scope each time call function(i)

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// 'I am another fn' because we first reassign fn before call fn 

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// {name" 'another obj'} same reason as case 4