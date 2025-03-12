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
//T could have other properties User do not have, returning only id and type will cause a type mismatch, as the extra properties would be lost
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     ...u,
//     type: "customer",
//   };
// }

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

// function f(a: string | number, b: string | number) {
//   if (typeof a === "string" && typeof b === "string") {
//     return `${a} : ${b}`;  // Both are strings
//   } else if (typeof a === "number" && typeof b === "number") {
//     return a + b;  // Both are numbers
//   } else {
//     throw new Error("Parameters must both be strings or both be numbers.");
//   }
// }
