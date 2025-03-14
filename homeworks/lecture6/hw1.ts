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
const user = { id: 1, type: "admin", name: "Alice" };
const customer = makeCustomer(user);
console.log(customer);

//T extends User, meaning it might have additional properties (e.g., { id: 1, type: "admin", name: "Alice" }).
//The returned object only contains id and type, removing extra properties from T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a !== typeof b) {
    throw new Error("Both parameters must be of the same type");
  }

  return typeof a === "string" ? `${a} : ${b}` : (a as number) + (b as number);;
}
console.log(f("hello", "world")); 
console.log(f(10, 20));           
