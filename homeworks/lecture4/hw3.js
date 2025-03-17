/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES6 using class
class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      Singleton.instance = this;
      this.timestamp = new Date(); // Example property
    }
  }
  
  //ES5 using constructor function and IIFE
  var Singleton = (function () {
    var instance;
  
    function Singleton() {
      if (instance) {
        return instance;
      }
      instance = this;
      this.timestamp = new Date(); // Example property
    }
  
    return Singleton;
  })();