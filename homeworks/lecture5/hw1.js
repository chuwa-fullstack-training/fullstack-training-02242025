// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
////  5 5 5 5 5 等1s 依次打印 5
console.log(i)///  == 5  beacause i in for loop declear as golbal

/*
 start for the index 0 to 5 , add to call stack eatch time . when loop finish, the call stack start to console log index 5 times
 */


// 2

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//  5 times and let inside function can not access let index outside function;  -> 0 , 1 ,2 ,3, 4

console.log(i)

// 3

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

/*

 this will every time put index value dirctly when call fucntion add to callstack is current index value
5 ,0 ,1, 2, 3, 4
*/
console.log(i)

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/*
 first fn == i am fn and line 43 add to callstack , callstack will use this add in call stack fn " i am fn" then 1s print i am fn


*/

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/*
output  is anhter obj

add in to stack first about call obj, but obj  change , when to callstack this point will use new obj anther obj

*/