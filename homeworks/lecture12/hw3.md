![demo](https://flaviocopes.com/images/react-example-counter/output.gif)

Implement the counter shown above in React.

## Requirements

- four buttons to increment 1, 10, 100, and 1,000, respectively
- one label to display the count
- (optional) one button to reset the count
- (optional) apply styles to make it look good

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => setCount(count + 1);

  const handlePlusTen = () => setCount(count + 10);

  const handlePlusHundred = () => setCount(count + 100);

  const handlePlusThousand = () => setCount(count + 1000);

  const handleReset = () => setCount(0);

  return (
    <React.Fragment>
      <div>
        <button onClick={handlePlusOne}>+1</button>
        <button onClick={handlePlusTen}>+10</button>
        <button onClick={handlePlusHundred}>+100</button>
        <button onClick={handlePlusThousand}>+1000</button>
      </div>
      <p>{count}</p>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  );
}