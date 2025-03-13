class Shape{
    constructor(){
        this.type = 'shape';
    }
    getType() {
        return this.type;
    }
}
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.type = 'triangel';
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
        const s = this.getPerimeter()/2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
    circumference(){
        return 2 * Math.PI * this.radius;
    }
}

const triangel = new Triangle(3,5,4);
console.log(triangel.getType());
console.log(triangel.getPerimeter());
console.log(triangel.getArea());

const circle = new Circle(5);
console.log(circle.area());
console.log(circle.circumference());


// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax