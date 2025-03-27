import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curNum: "status bar" };
  }

  handleClick = (value) => {
    this.setState({ curNum: value });
  };

  render() {
    return (
      <div className="phone-container">
        <div className="phone-screen">
          <div className="display">{this.state.curNum}</div>
          <div className="panel">
            {Array.from({ length: 20 }, (val, index) => index + 1).map(
              (num) => {
                return (
                  <button
                    key={num}
                    onClick={() => this.handleClick(num)}
                    className="phone-button"
                  >
                    {num}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
