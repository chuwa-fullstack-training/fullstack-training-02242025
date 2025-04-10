![demo](./hw4.gif)

Implement the converter shown above in React.




const AddSuffix = () => {
  const [val, setVal] = useState("");
  const [out, setOut] = useState("");

  const addOrdinalSuffix = (input) => {
    const num = parseInt(input, 10);

    if (isNaN(num)) {
      setOut(input);
      return;
    }

    const mod100 = num % 100;

    if (mod100 >= 11 && mod100 <= 13) {
      setOut(`${num}th`);
      return;
    }

    switch (num % 10) {
      case 1:
        setOut(`${num}st`);
        break;
      case 2:
        setOut(`${num}nd`);
        break;
      case 3:
        setOut(`${num}rd`);
        break;
      default:
        setOut(`${num}th`);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setVal(input);
    addOrdinalSuffix(input);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        className="border border-gray-300 p-2 rounded w-full"
        value={val}
        onChange={handleChange}
        placeholder="Enter number or text"
      />
      <p className="mt-2 text-lg font-medium">
        {out}
      </p>
    </div>
  );
};