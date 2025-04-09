import { Link } from "react-router-dom";

function SingleComponent({ index, input, savedColor, colorOptions, colorMap, onTextChange, onColorChange }) {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <div className="flex justify-between w-full px-8">
        <Link to="/" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Back to Home
        </Link>
        
        <div className="w-40">
          <select
            className="w-full p-2 border rounded bg-white"
            onChange={(e) => onColorChange(e.target.value)}
            value={savedColor}
          >
            <option value="" disabled>Select a color</option>
            {colorOptions.map((color, idx) => (
              <option key={idx} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div 
        className="w-[400px] border p-8 rounded-lg shadow-md"
        style={{
          backgroundColor: savedColor ? colorMap[savedColor] : "white",
        }}
      >
        <h2 className="text-xl font-bold mb-4">Component {index + 1}</h2>
        
        <label className="block mb-2">Component name:</label>
        <textarea
          className="w-full border rounded p-2 bg-white"
          value={input}
          onChange={(e) => onTextChange(e.target.value)}
        ></textarea>
        
        <div className="mt-4">
          <p>Current color: {savedColor || "None"}</p>
        </div>
      </div>
    </main>
  );
}

export default SingleComponent;