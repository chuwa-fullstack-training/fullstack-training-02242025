// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
//a,c,e,d,b.
//First the JS queue get executed and the Promise will be treated as Microtask, so all the console.log is printed except the one in setTimeOut and Promise result, printed out a,c,e
//Then the Microtask get executed first, because setTimeOut is Web API and will be added in Callback queue and executed after Microtask. 

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
// 1, start, success
//When fn is invocated, if will print 1 first and then save the result 'success' as Microtask in Callback queue, then the console.log('start') get executed, after that the Microtask get executed and print 'success'.
