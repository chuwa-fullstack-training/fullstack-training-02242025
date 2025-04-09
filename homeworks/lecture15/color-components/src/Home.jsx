import { Link } from "react-router-dom";

function Home({ inputs, savedColor, colorMap }) {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-2xl font-bold">Color Components</h1>
      
      <div className="grid grid-cols-3 gap-8 justify-items-center">
        {inputs.map((input, index) => (
          <Link 
            to={`/component/${index}`}
            key={index}
            className="w-[200px] border p-5 pb-11 no-underline text-black hover:shadow-lg"
            style={{
              backgroundColor: savedColor[index] ? colorMap[savedColor[index]] : "",
            }}
          >
            <label className="block mb-2">Component name:</label>
            <div className="w-full border rounded p-2 bg-white">
              {input || `Component ${index + 1}`}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;