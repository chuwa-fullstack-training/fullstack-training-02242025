// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let visited = {};

    return cloneDeep(obj, visited);
}

function cloneDeep(obj, visited) {
    if (typeof obj !== "object" || obj === null) return obj;

    if (visited.has(obj)) return visited.get(obj);

    let copy = Array.isArray(obj) ? [] : {};
    visited.set(obj, copy);

    Object.keys(obj).forEach(key => {
        copy[key] = deepClone(obj[key], seen);
    });

    return copy;
}