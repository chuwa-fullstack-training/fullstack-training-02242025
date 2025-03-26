import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

class App extends React.Component {
  render() {
    return dogs.map(dog => (
      <div>
        <p>Name: {dog.name}</p>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age}</p>
      </div>
    ));
  }
}

export default App;

//second way to write return jsx:
//In JavaScript, if you're returning an expression, you generally need to wrap it in curly braces ({}).
//  This is because you're writing JavaScript code within a JSX block.
// dogs.map() works automatically because it returns an array of JSX elements, and React can handle that array and render the elements individually.

return dogs.map(dog => {
  return (
    <div>
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
    </div>
  );
});


// myFunction() doesn’t automatically return an array of elements, and if you return multiple elements, React needs them to be wrapped in a single container element (like <div>).

// To make myFunction() work like map(), ensure it returns a single parent element if you're returning multiple JSX elements.
