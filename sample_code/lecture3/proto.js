/**
 * __proto__
 */
const dogPrototype = {
  breed: 'Shepard',
  bark: function () {
    console.log('Bark!');
  },
  sayMyName: function () {
    console.log('My name is', this.name);
  },
  fetch: function () {
    console.log('Fetch!');
  }
};

// create many dogs
let dogs = [];
for (let i = 0; i < 10; i++) {
  const dog = {};
  dog.name = 'dog' + i;
  dog.age = i;
  // dog.bark = function () {}
  // dog.fetch = function () {}
  dog.__proto__ = dogPrototype;
  dogs.push(dog);
}
dogs[0].sayMyName(); // My name is dog0

// improvement
function Dog(name, age) {
  const dog = {};
  dog.__proto__ = Dog.prototype;
  dog.name = name;
  dog.age = age;

  return dog;
}

//Dog.prototype is the prototype for instances created using Dog
//The prototype property(__proto__) is an object attached to the constructor function
//constrctur function like function Dog(the whole function) which allows instances created by that constructor to inherit properties and methods.
Dog.prototype.bark = function () {
  console.log('Bark!');
};
Dog.prototype.sayMyName = function () {
  console.log('My name is', this.name);
};
Dog.prototype.fetch = function () {
  console.log('Fetch!');
};

dogs = [];
for (let i = 0; i < 10; i++) {
  dogs.push(Dog('dog' + i, i));
}

dogs[0].sayMyName(); // My name is dog0

// syntactic sugar
function Cat(name, age) {
  this.name = name;
  this.age = age;
}

Cat.prototype.sayMyName = function () {
  console.log('My name is', this.name);
};

const cat = new Cat('cat', 3);
cat.sayMyName(); // My name is cat
// cat.sayMyName.call(cat);

//functions in JavaScript are objects, and they follow a different prototype chain then instances created by them
//cat.__proto__ points to Cat.prototype
//This means that cat inherits properties and methods from Cat.prototype
//Every function in JavaScript is an instance of Function, so Cat.__proto__ points to Function.prototype.
//This means Cat itself (as a function) inherits methods from Function.prototype (like call, apply, and bind).
//the cat instance does not have bind, call, or apply methods because these methods exist on Function.prototype, and cat is not a function
//cat → Cat.prototype → Object.prototype → null
//The constructor property is used to reference the function that created the object.
//call new User(), it does indeed invoke the constructor function which is the Cat,


//changing the prototype after an instance is created does not affect the instance itself. The instance has a reference to its prototype at the time of creation.
// If you change the prototype later, the instance won't automatically adopt the new prototype. However, if you create a new instance after changing the prototype,
// it will inherit the new prototype.

//When you define properties inside the constructor, they are directly assigned to the instance, meaning each object gets its own copy
//When you define a method inside a class, it is not stored in the instance itself. Instead, JavaScript puts the method on the prototype (Animal.prototype) so that all instances share the same method.
class Animal {
  constructor(name) {
    this.name = name; // Stored in the instance
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

const dog = new Animal("Buddy");
console.log(dog.hasOwnProperty("speak")); // false ❌ (not on the instance)
console.log(dog.__proto__.hasOwnProperty("speak")); // true ✅ (on the prototype)



//When you access a property, JavaScript simply looks up the value tied to that property, and there’s no need to know who is accessing it (the context).
// The property is directly on the instance (or the prototype chain) and is just data.

//When you call a method, JavaScript needs to know which object is invoking the method,
// because the method often operates on the instance's data (its properties).
// This is where this comes in to provide the context.


//this is necessary in the speak() method because the method uses it to access the instance’s property (this.name). The context (this) tells the method which instance is calling the method, so it knows whose name to use.

class Animal {
  constructor(name) {
    this.name = name; // Instance property

    // Arrow function
    this.speak = () => {
      console.log(`${this.name} makes a noise`);
    };
  }
}

const dog1 = new Animal("Buddy");
dog1.speak(); // "Buddy makes a noise"

//1. Class Definition: class Animal { ... }
// At this point, this is not defined because a class is just a template. It’s only when you create an instance that this becomes a real object.

// 2. Calling new Animal("Buddy"):
// When new Animal("Buddy") is called, a new object is created (let's call it dog).

// this inside the constructor now refers to this new object (dog).

// The constructor is executed, and the property name is set on this (which is dog). So, dog.name = "Buddy".

// 3. Defining the Arrow Function:
// Inside the constructor, when you define the arrow function this.speak = () => {...}, this already refers to the new instance (dog).

// Arrow functions do not have their own this. Instead, they inherit this from their lexical scope, which in this case is the constructor where this already refers to the new dog object.

// So, this.speak is a function that remembers that this refers to dog, even if it's called later.


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak = () => {
    console.log(`${this.name} makes a noise`);
  };
}
// Arrow Function Defined as a Property
// In the case above, speak is now a property on the instance (this.speak) that holds an arrow function.

// Arrow functions don’t have their own this. They inherit this from their surrounding context when the function is defined.

// In the case of defining the arrow function in the class body (outside the constructor), this still refers to the instance of the class, but it is set at the moment when the class is instantiated.

// 2. How this Behaves with Arrow Functions as Methods
// When you define speak as an arrow function outside the constructor, the arrow function is bound to the instance at the time of object creation.

// The key difference is that the arrow function is not on the prototype. It is instead directly attached to the instance itself.


// Regular methods defined inside the class (like speak() { ... }) are added to the prototype of the class, and when you call the method, this refers to the instance (dog).

// Arrow functions as methods are not added to the prototype. Instead, they are directly assigned as properties on each instance. This means each instance has its own copy of the arrow function.
