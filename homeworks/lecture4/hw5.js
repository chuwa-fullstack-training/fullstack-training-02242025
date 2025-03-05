// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, visited = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let clone = Array.isArray(obj) ? [] : {};
  visited.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = cloneDeepWithLoop(obj[key], visited);
    }
  }

  return clone;
};

const data = {
  name: "foo",
  child: null,
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);
console.log(clonedData !== data);
console.log(clonedData.child === clonedData);
