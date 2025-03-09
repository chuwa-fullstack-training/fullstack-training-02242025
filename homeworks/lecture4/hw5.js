// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here

     const clone = Array.isArray(obj) ? [] : {};
    visited.push({ original: obj, copy: clone });
    Object.keys(obj).forEach(key => {
        clone[key] = deepClone(obj[key], visited);
    });
    return clone;    
}
