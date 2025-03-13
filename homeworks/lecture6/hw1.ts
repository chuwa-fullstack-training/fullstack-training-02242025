// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T { // T extends User have more propertires than id, type.
  return {
    id: u.id,
    type: "customer",
  };// this return only return 2 of those will remove other T propertires. return much be match T
}
// fixed:
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u, // keeps extra properties
    type: "customer", // Overrides `type`
  };
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number { // add return expect type
  if (typeof a === typeof b) {

    return typeof a === "string" ? `${a} : ${b}` : a + (b as number);
  } else {
    throw new Error("parameters must be both strings or both numbers.");
  }
}
console.log(f("hello", "world")); // "hello : world"
console.log(f(10, 20));           // 30
console.log(f("hello", 5));       // Error: Parameters must be both strings or both numbers.
console.log(f(10, "test"));     //Error: Parameters must be both strings or both numbers.