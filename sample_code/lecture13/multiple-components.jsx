import React from 'react';

// React expects you to treat props as immutable. If you need to modify data,
// do it in the parent component using useState or setState and pass down the updated data as props.
//ItemList({ items: this.state.dogs });
const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

function Title(props) {
  return <h1>Welcome to {props.name}'s House</h1>;
}

class ItemList extends React.Component {
  constructor(props) {
    super(props); //this.props = { items: [...] };
  }
  render() {
    return this.props.items.map((item, idx) => (
      <Item key={idx} name={item.name} breed={item.breed} age={item.age} />
    ));
  }
}

class App extends React.Component {
  state = {
    name: 'Cooper'
  }
  render() {
    return (
      <div>
        <Title name={this.state.name}/>
        {dogs.map(dog => (
          <div>
            <p>Name: {dog.name}</p>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;



// state is an instance property because each component needs its own separate state.

// Methods like handleClick() are stored on the prototype (shared across instances).

// If you use an arrow function for methods, it becomes an instance property (useful for event handlers in React).
//this is a class field "=" to assign property directly on instance, same as define this.method = inside ocnstructor

// Class fields (state = {}) are just syntactic sugar for assigning properties inside the constructor.


// if this.state.dogs changes in App, React will:

// Re-render App.

// Re-evaluate the JSX inside render().

// Re-render only the components that receive updated props.
