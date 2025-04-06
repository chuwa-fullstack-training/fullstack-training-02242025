import React, { useState } from "react";

const Box = (props) => {
  const [value, setValue] = useState(props.value);

  const addNewComponent = (e) => {
    if (e.key === "Enter") {
      props.updateValue(value);
    }
  };

  return (
    <div className="box" key={props.index} style={props.style}>
      <label className="label">Component name:</label>
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={addNewComponent}
        onBlur={() => setValue(props.value)}
      ></input>
    </div>
  );
};

export default Box;
