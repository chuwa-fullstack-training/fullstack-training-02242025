function makeCustomer(u) {
    return {
        id: u.id,
        type: "customer",
    };
}
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a, b) {
    if (typeof a === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else {
        return a + b;
    }
}
