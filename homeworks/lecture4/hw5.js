// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const visited = new Map();

  const result = Array.isArray(obj) ? [] : {};
  visited.set(obj, result);

  const stack = [[obj, result]];

  while (stack.length) {
    const [curObj, curClone] = stack.pop();

    for (let key in curObj) {
      if (curObj.hasOwnProperty(key)) {
        const value = curObj[key];
      }
      if (value && typeof value === "object") {
        if (visited.has(value)) {
          curClone[key] = visited.get(value);
        } else {
          const newClone = Array.isArray(obj) ? [] : {};
          visited.set(value, newClone);
          curClone[key] = newClone;
          stack.push([value, newClone]);
        }
      } else {
        curClone[key] = value;
      }
    }
  }
  return result;
};
