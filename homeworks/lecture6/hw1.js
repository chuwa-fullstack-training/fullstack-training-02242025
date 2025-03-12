var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeCustomer(u) {
    return __assign(__assign({}, u), { type: "customer" });
}
var user1 = { id: 1, type: "guest" };
console.log(makeCustomer(user1)); // Expected: { id: 1, type: "customer" }
var admin = { id: 1, type: "admin", permission: "all" };
console.log(makeCustomer(admin));
// since we want to modify type and keep u's properties, we can spread u here.
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("parameters are one string and one number");
    }
}
// allow function to accept both types, if parameters are one string and one number,
// throw an error
