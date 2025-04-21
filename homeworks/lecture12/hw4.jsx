import React from "react";

class Hw4 extends React.Component {
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

    if (input === "") {
      return "";
    }

    return "Invalid input";
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Arial" }}>
        <h2>🔢 Ordinal Number Converter</h2>
        <input
          type="text"
          value={this.state.num}
          onChange={this.handleChange}
          placeholder="Enter a number"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #aaa",
            marginBottom: "20px"
          }}
        />
        <div style={{ fontSize: "24px", marginTop: "10px", color: "#333" }}>
          {this.convert(this.state.num)}
        </div>
      </div>
    );
  }
}

export default Hw4;

