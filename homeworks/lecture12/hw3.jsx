import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
  }
  handleClick = (value) => {
    this.setState({ sum: this.state.sum + value });
  };
  render() {
    return (
      <div className="HW3">
        <div className="button">
          <button name="1" onClick={() => this.handleClick(1)}>
            +1
          </button>
          <button name="10" onClick={() => this.handleClick(10)}>
            +10
          </button>
          <button name="100" onClick={() => this.handleClick(100)}>
            +100
          </button>
          <button name="1000" onClick={() => this.handleClick(1000)}>
            +1000
          </button>
        </div>
        <div>Sum:{this.state.sum}</div>
      </div>
    );
  }
}
export default App;
