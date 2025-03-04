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

//Dog.prototype
// the prototype for instances created using Dog
//The prototype property is an object attached to the constructor function,
//which allows instances created by that constructor to inherit properties and methods.
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

//functions in JavaScript are objects, and they follow a different prototype chain than instances created by them
//cat.__proto__ points to Cat.prototype
//This means that cat inherits properties and methods from Cat.prototype
//Every function in JavaScript is an instance of Function, so Cat.__proto__ points to Function.prototype.
//This means Cat itself (as a function) inherits methods from Function.prototype (like call, apply, and bind).
//the cat instance does not have bind, call, or apply methods because these methods exist on Function.prototype, and cat is not a function
//cat → Cat.prototype → Object.prototype → null
//The constructor property is used to reference the function that created the object.
//call new User(), it does indeed invoke the constructor function which is the Cat,
