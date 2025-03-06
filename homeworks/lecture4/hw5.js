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
    const clone = (obj) => {
        if (typeof obj !== 'object' || obj === null) return obj;
        if (map.has(obj)) {
            return map.get(obj);
        }
        const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
        map.set(obj, result);
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = clone(obj[key]);
            }
        }
        return result;
    };
    return clone(obj);
};
