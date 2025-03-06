// write a function to deep clone an object with circular reference
//
const data = {
    name: 'foo',
    child: null
}
data.child = data;

// const cloneDeepWithLoop = (obj) => {
//     //obj {key: object}
//     //obj = {a:1,b:2}  =>  {a, b}
//     //obj = {a: {a:1, b:{c:1}}, b:2} => {a: {a, b: {c}}}
//     return Object.keys(obj).reduce((acc, key) => {
//         if (typeof obj[key] !== "object" || obj[key] === null) {
//             acc[key] = obj[key]
//         } else {
//             acc[key] = cloneDeepWithLoop(obj[key])
//         }
//         return acc
//     }, {});
// }


const cloneDeepWithLoop = (obj, s = new Map()) => {
    //s {obj => objcopy}
    if(s.has(obj)) {
        return s.get(obj)
    }
    const copy = {}
    s.set(obj, copy); //reference
    return Object.keys(obj).reduce((acc, key) => {
        if (typeof obj[key] !== "object" || obj[key] === null) {
            acc[key] = obj[key]
        } else {
            acc[key] = cloneDeepWithLoop(obj[key], s)
        }
        return acc
    }, copy);
}

console.log(cloneDeepWithLoop(data))
