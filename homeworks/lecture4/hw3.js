/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
//es 5
var Singleton = (function() {
    var instance;

    function Singleton(){
        if(!instance){
            instance = this;
        }
        return instance;

    }
    return Singletonl
})();


//es6
class Singleton {
    constructor(){
        if(!Singleton.instance){
            Singleton.instance=this;
        }
        return Singleton.instance;
    }

}

const instance1 =new Singleton();
const instance2=new Singleton();

console.log(instance1===instance2)
