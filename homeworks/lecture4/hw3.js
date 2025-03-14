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
  
    this.value = "singleton";
  }
  
  
  var instance1 = new Singleton();
  var instance2 = new Singleton();
  console.log(instance1 === instance2);
  console.log(instance1.value); 
  


  class Singleton1 {
    constructor() {
      
      if (Singleton.instance) {
        return Singleton.instance;
      }
      
      Singleton.instance = this;
      
      this.value = "I am the singleton instance";
    }
  }