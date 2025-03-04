// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const map = new Map();
    const getCloned = (element) => {
        if(typeof element !== 'object'){
            return element;
        }
        if(map.has(element)) return map.get(element);
        const copy = Array.isArray(element) ? [] : {};
        map.set(element, copy);
        return Object.entries(element).reduce((acc, [key, value])=>{
            acc[key] = getCloned(value);
            return acc;
        }, copy);
    };
    return getCloned(obj);
}