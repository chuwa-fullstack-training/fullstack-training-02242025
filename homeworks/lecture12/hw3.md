![demo](https://flaviocopes.com/images/react-example-counter/output.gif)

Implement the counter shown above in React.

## Requirements

- four buttons to increment 1, 10, 100, and 1,000, respectively
- one label to display the count
- (optional) one button to reset the count
- (optional) apply styles to make it look good


const Counter = () => {
  const [value, setValue] = useState(0);

  const increaseBy = (amount) => setValue(value + amount);
  const reset = () => setValue(0);

  return (
    <div>

      <div className="flex justify-center gap-2 mb-4">
        <button 
          
          onClick={() => increaseBy(1)}>
          +1
        </button>
        <button 
          
          onClick={() => increaseBy(10)}>
          +10
        </button>
        <button 
          
          onClick={() => increaseBy(100)}>
          +100
        </button>
        <button 
          
          onClick={() => increaseBy(1000)}>
          +1000
        </button>
      </div>

      <div >
        Count: <p>{value}</p>
      </div>
    </div>
  );
};

export default Counter;
