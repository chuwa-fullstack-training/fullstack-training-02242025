import { useState } from "react";

export default function Clock() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // When a function gets called,
  //it executes in the lexical scope where it was originally defined, not where it was called.

//This is a fundamental rule in JavaScript: Functions remember the scope in which they were created.

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>update</button>
    </>
  );
}
