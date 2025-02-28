/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    let result = {};
    for (let prop in p) {
        result[prop] = p[prop];
    }
    for (let prop in o) {
        result[prop] = o[prop];
    }
    return result;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let i in o) {
        if (!(i in p)) {
            delete o[i];
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
    let result = {};
    for (let i in o) {
        if (i in p) {
            result[i] = o[i];
        }
    }
    return result;
}