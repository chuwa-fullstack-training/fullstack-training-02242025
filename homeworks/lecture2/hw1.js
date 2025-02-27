/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(let key in p){
        o[key] = p[key];
    }
}


/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const newObj = {...o};
    for(let key in p){
        if(!(key in newObj)){
            newObj[key] = p[key];
        }
    }
    return newObj;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let key in o){
        if(!(key in p)){
            delete o[key];
        }
    }
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const newObj = {};
    for(let key in o){
        if(key in p){
            newObj[key] = o[key];
        }
    }
    return newObj;
}


//tests

const o = {
    a : 1,
    b : 2,
    c : 3
};

const p = {
    a : 3,
    d : 9,
    e : 10
};

console.log("......Question 1......")

extend(o, p);
Object.entries(o).forEach(([key,value]) =>{
    console.log(`${key}: ${value}`);
});

console.log("......Question 2......")

const obj = union(o,p);
Object.entries(obj).forEach(([key,value]) =>{
    console.log(`${key}: ${value}`);
});

console.log("......Question 3......")

restrict(o, p);
Object.entries(o).forEach(([key,value]) =>{
    console.log(`${key}: ${value}`);
});

console.log("......Question 4......")
const obj2 = intersection(o, p);
Object.entries(obj2).forEach(([key,value]) =>{
    console.log(`${key}: ${value}`);
});