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

//sayName is an arrow functio
//it always remembers the this value from when it was defined
const sayPersonName = person.sayName;
sayPersonName(); // undefined
sayPersonName.call(person); // Aaron

// const another = new Person('Alex');
// sayPersonName.call(another);

// change this.sayName to arrow function
