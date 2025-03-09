// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): User {
  return {
    id: u.id,
    type: "customer",
  };
}
//return a value of type T, but it returns an object with id and type
// change the return typer from T to User

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error

function f(a: string, b: string): string;
function f(a: number, b: number): number;

function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error(
    "Both parameters must be of the same type:either two strings or two numbers "
  );
}
