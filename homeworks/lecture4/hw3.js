/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
function Singleton() {
  if (Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  return this;
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true

class Singleton_s {
  constructor() {
    if (Singleton_s.instance) {
      return Singleton_s.instance;
    }
    Singleton_s.instance = this;
  }
}

const instance1_s = new Singleton_s();
const instance2_s = new Singleton_s();
console.log(instance1 === instance2); // true
