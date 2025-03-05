// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const cloned = new Map()

    function cloneObject(item) {
        if (item === null || typeof item !== "object") {
            return item // stop recursion when reach primitive values
        }
        if (cloned.has(item)){
            return cloned.get(item)
        }

        const copy = Array.isArray(item) ? [] : {}
        cloned.set(item, copy)

        Object.keys(item).forEach(key => {
            copy[key] = cloneObject(item[key])
        })

        return copy
    }
    return cloneObject(obj)
}

const data = {
     name: 'foo',
    child: null
}
data.child = data;

const dataCloned = cloneDeepWithLoop(data)
console.log(data !== dataCloned)
console.log(data === dataCloned)