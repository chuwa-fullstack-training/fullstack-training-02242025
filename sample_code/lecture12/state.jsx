import React from 'react';

class App extends React.Component {
  // state = {
  //   name: 'Aaron'
  // }
  constructor(props) {
    super(props);
    this.state = {
      name: 'Aaron',
      counter: 0
    };
  }

  //handleClick is a property on the App class instance
  //setState is async

  //The setState() method is part of the React.Component class,
  //so it’s available on all instances of the component.

  //state is updated by merging with original state
  handleClick = () => {
    //one way: this.setState({ count: this.state.count + 1 });
    //another way using callback function
    //executed with the previous state (prevState) and props as arguments
    // If multiple setState calls happen in quick succession,
    // React might combine them into a single re-render,
    // and all the updates will happen based on the same initial state
    //this.setState(prevState => ({ counter: prevState.counter + 1 })) is called,
    //and React batches this state update.
    //React knows that the next setState function
    //also needs to access the most recent state (because it’s using the callback pattern)
    //so it will use the updated state for the next update.

    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    //syntax: setState((prevState, props) => newState)
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log('in setState callback, counter: ', this.state.counter);
    });
    console.log('after setState, counter: ', this.state.counter);
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h1>My First React App</h1>
        <h2>Welcome {this.state.name}</h2>
        <p onClick={this.handleClick}>counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
