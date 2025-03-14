// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const root = Array.isArray(obj) ? [] : {};
    const clonesMap = new Map();
    clonesMap.set(obj, root);
    const stack = [{ original: obj, clone: root }];
  
    while (stack.length) {
      const { original, clone } = stack.pop();
      for (let key in original) {
        if (original.hasOwnProperty(key)) {
          const value = original[key];
          
          if (value && typeof value === 'object') {
            if (clonesMap.has(value)) {
              clone[key] = clonesMap.get(value);
            } else {
              const newClone = Array.isArray(value) ? [] : {};
              clone[key] = newClone;
              clonesMap.set(value, newClone);
              stack.push({ original: value, clone: newClone });
            }
          } else {
            clone[key] = value;
          }
        }
      }
    }
    
    return root;
  };
  
  
  const data = {
    name: 'foo',
    child: null
  };
  data.child = data; 
  
  const clonedData = cloneDeepWithLoop(data);
  console.log(clonedData);
  console.log(clonedData === data);            
  console.log(clonedData.child === clonedData);
  