// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const hash = new Map();

    const clone = (item) => {
        if (item === null) {
            return null
        };
        if (typeof item !== 'object'){
            return item
        };
        if (hash.has(item)) {
            return hash.get(item)
        };

        const cloned = Array.isArray(item) ? [] : {};
        hash.set(item, cloned);

        for (let key in item) {
            if (item.hasOwnProperty(key)) {
                cloned[key] = clone(item[key]);
            }
        }

        return cloned;
    };

    return clone(obj);
}