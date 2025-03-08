// function Shape() {

// }
class shape{
    constructor(){
        this.type = 'shape';
    }
    getType(){
        return this.type;
    }
}

class Triangle extends shape{
    constructor(a,b,c){
        super();
        this.type = 'Triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea() {
        const s = this.getPerimeter() / 2; // 海伦公式
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class Circle extends shape{
    constructor(radius){
        super();
        this.type = 'Circle';
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // 计算面积
    }

    circumference() {
        return 2 * Math.PI * this.radius; // 计算周长
    }
}
const triangle = new Triangle(3, 4, 5);
console.log(triangle.getType());        // "triangle"
console.log(triangle.getPerimeter());   // 12
console.log(triangle.getArea());        // 6

const circle = new Circle(5);
console.log(circle.getType());          // "circle"
console.log(circle.area());             // 78.54
console.log(circle.circumference());    // 31.42






// Shape.prototype.getType = function() {
//     return this.type;
// }

// function Triangle(a, b, c) {
//     this.type = 'triangle';
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax