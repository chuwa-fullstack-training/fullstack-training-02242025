// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    const result = {};
    const stack = [obj];
    while (stack.length) {
        const current = stack.pop();
        for (const key in current) {
            if (current.hasOwnProperty(key)) {  
                if (typeof current[key] === 'object' && current[key] !== null) {
                    stack.push(current[key]);
                }
                result[key] = current[key];
            }
        }
    }
}