/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let key in p) {
        o[key] = p[key];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let obj = {};
    for (let key in p) {
        obj[key] = p[key];
    }
    for (let key in o) {
        obj[key] = o[key];
    }
    return obj;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let key in o) {
        if (!p.hasOwnProperty(key)) {
            delete o[key];
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let obj = {};
    for (let key in o) {
        if (p.hasOwnProperty(key)) {
            obj[key] = o[key];
        }
    }
    return obj;
}

let o = {a: 1, b: 2, c: 3};
let p = {a: 1, c: 4, d: 5};
console.log(restrict(o, p))
