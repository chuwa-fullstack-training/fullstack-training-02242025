// 1. why there would be error in the following code? and how to fix it?

type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}

// The function is expected to return an object of the same type T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === typeof b) {
    return typeof a === "string" ? `${a} : ${b}` : a + (b as number);
  }
  throw new Error("Both arguments must be either strings or numbers");
}

// If one argument is a string and the other is a number, it should throw an error.
