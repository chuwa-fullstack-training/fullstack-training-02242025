function Person(name) {
  this.name = name;
  this.sayName = () => {
    console.log(this.name);
  };
}

const person = new Person('Aaron');
//Person is called with new Person('Aaron'),
//this inside Person refers to the newly created object { name: 'Aaron' }
person.sayName(); // Aaron

//sayName is an arrow function
//it always remembers the this value from when it was defined


const sayPersonName = person.sayName;
sayPersonName(); // undefined
sayPersonName.call(person); // Aaron

// const another = new Person('Alex');
// sayPersonName.call(another);

// change this.sayName to arrow function


// this.name = name; assigns "Alice" to the new object.

// The arrow function this.sayName = () => {...} is defined at this moment.

// Since it is inside the constructor, it captures this from the constructor’s scope.

// At this point, this already refers to the new object (person1), so the arrow function keeps that reference.
//sayname is defined when constructor runs
