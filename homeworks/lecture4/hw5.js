// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, visited = new WeakMap()) => {
    // Implement the function here
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    let cloneObj = Array.isArray(obj) ? [] : {};
    visited.set(obj, cloneObj);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = cloneDeepWithLoop(obj[key], visited);
        }
    }
    return cloneObj;
}
const data = {
    name: 'foo',
    child: null
}
data.child = data; 
const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);
console.log(clonedData.child === clonedData); 
console.log(clonedData !== data);