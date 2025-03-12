// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    //id: u.id,
    ...u,
    type: "customer",
  };
}
// type T extends user and could contain extra properties. so we can't only return id and type properties.
// since we want to modify type and keep u's properties, we can spread u here.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number"){
    return a + b;
  } else {
    throw new Error("parameters are one string and one number");
  }
}
// allow function to accept both types, if parameters are one string and one number, throw an error
