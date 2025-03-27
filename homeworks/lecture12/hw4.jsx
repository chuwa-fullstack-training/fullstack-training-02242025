import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: "" };
  }
  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ num: inputValue });
  };

  convert(input) {
    const number = parseInt(input, 10);
    if (!isNaN(number)) {
      let suffix = "th";
      if (number % 10 === 1 && number % 100 !== 11) {
        suffix = "st";
      } else if (number % 10 === 2 && number % 100 !== 12) {
        suffix = "nd";
      } else if (number % 10 === 3 && number % 100 !== 13) {
        suffix = "rd";
      }
      return `${number}${suffix}`;
    }
    if(input === "") {
      return ""
    }
  }
  render() {
    return (
      <div className="HW3">
        <input
          name="inputNum"
          type="text"
          value={this.state.num}
          onChange={this.handleChange}
        ></input>
        <div>{this.convert(this.state.num)}</div>
      </div>
    );
  }
}
export default App;
