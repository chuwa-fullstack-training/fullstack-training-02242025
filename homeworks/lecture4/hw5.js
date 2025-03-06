// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let visited = new Map();
    function deepClone(value){
        if (typeof value !== 'object' || value === null) return value;
        if (visited.has(value)) return visited.get(value);
        if (Array.isArray(value)){ //so if object is only arr, it's treated differently
            let arr_copy =[];
            visited.set(value, arr_copy);
            value.forEach((item, index)=>{
                arr_copy[index] = deepClone(item);
            });
            return arr_copy;
        }
        let copied={};
        visited.set(value, copied);
        Object.keys(value).forEach((key)=>{
            copied[key] = deepClone(value[key]);
        })
    return copied;
    }
return deepClone(obj);
}
