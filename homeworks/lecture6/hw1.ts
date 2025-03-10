// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }

function makeCustomer<T extends User>(u: T): T {
  // The error occurs because we're trying to return a plain object
  // when TypeScript expects us to return type T which could have additional properties
  // Fix: We need to preserve all properties of T while updating type
  return {
    ...u, // Spread operator preserves all properties of T
    type: "customer", // Override just the type property
  } as T; // Type assertion to T since we know this matches the contract
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }

function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error(
      "Both parameters must be of the same type (either strings or numbers)"
    );
  }
}
