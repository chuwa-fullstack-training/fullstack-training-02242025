// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// prototype based inheritance
function Shape() {
    this.type = 'shape';
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

// Set up inheritance for Triangle
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// Add methods to Triangle prototype
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};

Triangle.prototype.getArea = function() {
    const semi = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semi * (semi - this.a) * (semi - this.b) * (semi - this.c));
    return area;
};

function Circle(radius) {
    Shape.call(this);
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
};

Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.radius;
};

// 6. change all code above to use ES6 class syntax
class Shape {
    constructor(type){
        this.type = 'shape';
    }
}

class Triangle extends Shape{
    constructor(a,b,c){
        super()
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        return this.a + this.b + this.c
    }

    getArea() {
        const semi= (this.a + this.b + this.c) / 2
        const area = Math.sqrt(semi * (semi - this.a) * (semi - this.b) * (semi - this.c))
        return area
    }
}

class Circle extends Shape {
    constructor(radius){
        super()
        this.type = 'circle'
        this.radius = radius
    }

    getArea(){
        return Math.PI * this.radius * this.radius
    }

    getCircumference(){
        return Math.PI * 2 * this.radius
    }
}