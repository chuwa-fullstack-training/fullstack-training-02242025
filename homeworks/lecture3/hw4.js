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
Triangle.prototype.constructor = Triangle; //The constructor property is used to reference the function that created the object
//Fixes the constructor property so it points to Triangle instead of Shape. This ensures that instances of Triangle have the correct constructor reference.

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  };

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

// 4. implement a method area for Circle class
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };

// 5. implement a method circumference for Circle class
Circle.prototype.getPerimeter = function() {
  return 2 * Math.PI * this.radius;  
};

// 6. change all code above to use ES6 class syntax
class Shape {
    constructor() {
        this.type = "shape";
    }

    getType() {
        return this.type;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();  // Calls the Shape constructor
        this.type = 'triangle';  // Overwrites type for Triangle instances
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const s = (this.a + this.b + this.c) / 2;  // semi-perimeter
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    };
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}
