// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, hash = new WeakMap()) => {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitive values as is
    }

    if (hash.has(obj)) {
        return hash.get(obj); // Return cached clone to prevent circular loops
    }

    let clone = Array.isArray(obj) ? [] : {}; // Create a new object or array
    hash.set(obj, clone); // Store reference in WeakMap to track circular references

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], hash); // Recursively copy properties
        }
    }

    return clone;
};

// Example with circular reference
const data = {
    name: 'foo',
    child: null
};

data.child = data; // Circular reference

const clonedData = cloneDeepWithLoop(data);

console.log(clonedData); // { name: 'foo', child: [Circular] }
console.log(clonedData !== data); // true (different objects)
console.log(clonedData.child === clonedData); // true (circular reference preserved)
