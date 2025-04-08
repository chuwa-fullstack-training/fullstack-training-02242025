import React from "react";

const Color = (props) => {
  return (
    <div style={{ backgroundColor: `${props.color}` }}>
      <h1>{props.color} Page</h1>
    </div>
  );
};

export default Color;
