// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};
function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}
// Error: Property 'type' is missing in type '{ id: number; type: string; }' but required in type 'T'.
// Solution: Add type 'T' to the return type of the function
//function makeCustomer<T extends User>(u: T): T {
//  return {
//    id: u.id,
//    type: "customer",
//  } as T;
//}




// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
// Solution: Add an overload signature to the function
//function f(a: string, b: string): string;
//function f(a: number, b: number): number;
//function f(a: string | number, b: string | number) {
//  if (typeof a === "string") {
//    return `${a} : ${b}`;
//  } else {
//    return a + b;
//  }
//}
