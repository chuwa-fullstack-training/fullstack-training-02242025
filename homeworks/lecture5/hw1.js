// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5\n5\n5\n5\n5\n
// i when 1000 passed, i = 5, and since it used var, there is only one i

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// let is block-scoped, so every loop create a new i


// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0 1 2 3 4
// each time call function(i), the i inside function is a copy value, not var i

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// fn is already passed to settimeout, so it does not matter to change it afterwards

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// the obj passed to settimeout is the reference to it, so change afterwards make sense