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

// Because return type has only keys, id and type, which is not necessarily a T-type
// since T may have additional keys other than User.

// To solve it, if we only want to return User type, we can just replace return type T as User,
// Or if we want to return all properties from T, we can use ...u

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a !== typeof b) {
    throw new Error("Both parameters must be of the same type");
  }

  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

/*
We can either write if else for all conditions or we can use overloading
*/
