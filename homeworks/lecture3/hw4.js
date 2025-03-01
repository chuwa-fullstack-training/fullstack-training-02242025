function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;




// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}

Triangle.prototype.getArea = function(){
    const a = this.a, b = this.b, c = this.c;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function Circle(radius){
    this.shape = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function(){
    return Math.PI * this.radius * this.radius;
}

Circle.prototype.getCircumference = function(){
    return 2 * Math.PI * this.radius;
}


class Shape{
    constructor(){
        this.shape = 'shape';
    }
}

class Triangle extends Shape{
    constructor(a, b, c){
        super();
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = 'triangle';
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        const a = this.a, b = this.b, c = this.c;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
        this.shape = 'circle';
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

