/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES5
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);
// ES6
const Singleton1 = (function () {
    let instance;

    function createInstance() {
        return new Object("I am the instance");
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const instance11 = Singleton1.getInstance();
const instance22 = Singleton1.getInstance();
console.log(instance11 === instance22); 
