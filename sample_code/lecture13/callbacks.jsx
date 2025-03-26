import React from 'react';

const dogs = [
  { id: 1, name: 'Cooper', breed: 'Golden Retriever', age: 1 },
  { id: 2, name: 'Pepper', breed: 'Border Collie', age: 3 }
];

function Dog(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Breed: {props.breed}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

/*
controlled意义：input的value不再是有html本身提供 而是和react state完全绑定

case1: <input name="search" />
un-controlled: Since there's no value prop, the browser handles the text you type (default uncontrolled behavior)
React does not track these changes because the component does not update the state.

case2: <input name="search" type="text" value={props.text}/>
somehow controlled but not allowed for typing:
the Search component can be controlled by the parent
he input's value is controlled by props.text, React only displays whatever is passed down.
Without an onChange, the input never updates when you type because there's no function updating the text value.



<input
          type="text"
          value={this.state.searchInput} // Step 2: Control value
          onChange={this.handleChange} // Step 3: Update state on change
        />
case3: controlled compmment: handleChange updates state, causing a re-render with the new value

*/
function Search(props) {
  return (
    <div>

<input
          type="text"
          value={this.state.searchInput} // Step 2: Control value
          onChange={this.handleChange} // Step 3: Update state on change
          name = "search"
        />
    </div>
  );
}

class App extends React.Component {
  state = {
    searchInput: ''
  };
  handleChange = e => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    return (
      <div>
        <Search text={this.state.searchInput}
          handleChange={this.handleChange}/>
          
        {dogs
          .filter(dog => dog.name.includes(this.state.searchInput))
          .map(dog => (
            <Dog key={dog.id} name={dog.name} breed={dog.breed} age={dog.age} />
          ))}
      </div>
    );
  }
}

export default App;
