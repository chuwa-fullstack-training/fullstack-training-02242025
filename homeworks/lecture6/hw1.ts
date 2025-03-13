// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    // id: u.id,
    ...u,
    type: "customer",
  };
}
// T here is a type that extends User, and it can have more properties than the ones in User. 
// u instantiated T, so u may not only have "id" and "type" attributes. If the additional attributes are not preserved, there will type mismatching.
// Spread Operator ...u make sure all the attributes are preserved.


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number{
  if (typeof a !== typeof b){
    throw new Error('Parameters must be both number or both string.')
  }
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return (a as number) + (b as number);
  }
}
