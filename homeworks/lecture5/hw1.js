// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//print 5, 5, 5, 5, 5 after 1s
//each iteration schedules a setTimeout() to execute after 1 second
//var, it is function-scoped
//all 5 callback are queued in callback queue after 1s with the i = 5
//then go to js stack and log 5s

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//print 0, 1, 2, 3, 4 after 1s

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//function(i){}(i) is IFFI and creates a new function scope with a fresh copy of i
//When setTimeout executes after 1 second,
//it references the i from its own function scope, which is preserved correctly
//print 0, 1, 2, 3, 4 after 1s

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//'I am another fn' after 1s
//set timeout schedules a call to fn after 1 second
//run timeout with the reference value of fn

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

//{name: 'another obj'}
//run timeout with the reference value of ob
