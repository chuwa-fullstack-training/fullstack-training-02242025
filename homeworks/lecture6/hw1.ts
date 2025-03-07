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

// This makeCustomer function expects to return a T-typed result. T extends user and can have additional attributes other than id.
// in the return part of the function, these attributes are discarded, and therefore will fail the type check

function updatedMakeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    type: "customer",
  };
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error

function f(a: string, b:string): string;
function f(a: number, b:number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
