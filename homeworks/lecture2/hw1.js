/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // method 1
    for (let key in p) {
        o[key] = p[key];
      }
      return o;
    
    // method 2
    return Object.assign(o,p);
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // method 1 using shallow copy
    const result = {...p, ...o};
    return result;

    // method 2 using assign
    return Object.assign({}, p, o);
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // method 1
    for (let key in o){
        if (!(key in p)){
            delete o[key];
        }
    }
    return o;

    //method 2 
    Object.keys(o).forEach(key => {
        if (!(key in p)){
            delete o[key];
        }
    });
    return o;

    //method 3
    return Object.keys(o).reduce((acc, key) => {
        if (key in p){
            acc[key] = o[key];
        }
        return acc;
    }, {});

}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // method 1
    const result = {};
    for (let key in o){
        if (key in p){
            result[key] = o[key];
        }
    }
    return result;

    //method 2
    return Object.keys(o).reduce((acc, key) => {
        if (key in p){
            acc[key] = o[key];
        }
        return acc;
    }, {});
}