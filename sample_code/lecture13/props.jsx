import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

class Dog extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Breed: {this.props.breed}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        {dogs.map(dog => (
          <Dog key={dog.id} name={dog.name} breed={dog.breed} age={dog.age} />
        ))}
      </div>
    );
  }
}

export default App;


/*
Creating an Instance of App: When React creates an instance of the App component, it initializes the App instance. This instance has its own state (e.g., count: 0) and a method called handleClick. The this keyword in the constructor or methods refers to the instance of App that is created. For example, inside handleClick, this refers to the App instance, meaning that this.state.count accesses the state of the specific App instance.

Passing handleClick by Reference: Inside the App.render() method, the handleClick function is passed by reference to the Dog component as the onClick prop. Even though the handleClick function is written in the App instance, this.handleClick still refers to the App instance where it was defined. This is because, in JavaScript, functions are passed by reference. The reference to this.handleClick in the Dog component still points to the method inside the App instance.

Triggering handleClick in Dog: When the button in the Dog component is clicked, it invokes the onClick function, which points to handleClick from the App instance. Here’s where this comes into play: since handleClick is still tied to the App instance, when it’s executed, this inside handleClick refers to the App instance, and thus this.state.count is updated in that specific App instance.

Re-rendering the App Instance: After handleClick updates the App's state with this.setState(), React triggers a re-render of the App component.
When React re-renders App, it uses the updated state, and this.state.count will reflect the new value.
The count is passed as a prop to each Dog, Since the Dog components are receiving new props (the updated count), they will also re-render.
and this inside the App instance remains consistent, representing the same object.

Updated count in All Dog Components: After the state update, React re-renders the Dog components with the new count passed as props.
The count value is dynamic, coming from this.state.count in the App instance.
Since each Dog component receives a prop from App,
React updates each of them, and the updated count value reflects in all instances of Dog.





React follows a "top-down" data flow, where:

Parent Component (App) updates its state.

If the state change affects the props of any child component, React will re-render that child component.
*/
