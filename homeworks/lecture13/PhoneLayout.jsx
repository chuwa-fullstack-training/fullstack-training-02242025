import React from "react";
import "./styles.css";

class PhoneLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curNum: "Status Bar" };
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
            {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
              <button
                key={num}
                onClick={() => this.handleClick(num)}
                className="phone-button"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneLayout;
