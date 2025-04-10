# Layout

Requirements:

- [ ] Create the layout similar as the phone screen
- [ ] Every button is clickable to see the effect

![layout](./layout.png)





const PhoneGrid = () => {
  const handleClick = (number: number) => {
    console.log(`Button ${number} clicked`);
  };

  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="w-72 h-[500px] bg-white rounded-[40px] border border-gray-400 flex flex-col overflow-hidden">
        <div className="text-center py-2 bg-blue-600 text-white text-sm">status bar</div>
        <div className="flex-1 bg-blue-500 grid grid-cols-4 gap-2 p-3">
          {buttons.map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-white text-black font-bold py-2 rounded-lg shadow-md active:bg-gray-300"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneGrid;
