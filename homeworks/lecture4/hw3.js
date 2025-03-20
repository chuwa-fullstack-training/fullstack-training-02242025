/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES5 Singleton Pattern
function Singleton1() {
    if (Singleton1.instance) {
        return Singleton1.instance;  // 如果实例已经存在，直接返回已存在的实例
    }

    this.data = 'Some data';  // 示例属性

    Singleton1.instance = this;  // 保存实例
}

// 测试
const instance1 = new Singleton1();
const instance2 = new Singleton1();

console.log(instance1 === instance2);  // true
// ES6 Singleton Pattern
class Singleton2 {
    constructor() {
        if (Singleton2.instance) {
            return Singleton2.instance;  // 如果实例已经存在，直接返回已存在的实例
        }

        this.data = 'Some data';  // 示例属性
        Singleton2.instance = this;  // 保存实例
    }

    // 可以添加其他方法
    getData() {
        return this.data;
    }
}

// 测试
const instance3 = new Singleton2();
const instance4 = new Singleton2();

console.log(instance3 === instance4);  // true
