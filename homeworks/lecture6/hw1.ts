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
//T is a subtype of user, so t may have other properties that user doesn't have . typeScript doesn't support return child class without including all properteis
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}

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
//may throw error is a is string and b is a number
if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } 
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
