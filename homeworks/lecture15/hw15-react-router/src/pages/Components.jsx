import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ColorBox from "../components/ColorBox";

const initialNames = {
  first: "Component 1",
  second: "Component 2",
  third: "Component 3",
  fourth: "Component 4",
  fifth: "Component 5",
  sixth: "Component 6",
};

const COLORS = ["Brown", "Blue", "Orange", "Beige", "Green"];

export default function Components() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(name || "first");
  const [color, setColor] = useState("Beige");
  const [names, setNames] = useState(initialNames);

  const handleChangeName = (key, value) => {
    setNames((prev) => ({ ...prev, [key]: value }));
  };

  const handleComponentSelect = (value) => {
    setSelected(value);
    navigate(`/components/${value}`);
  };

  return (
    <div>
      <h2>Components</h2>

      <select
        value={selected}
        onChange={(e) => handleComponentSelect(e.target.value)}
      >
        {Object.keys(initialNames).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {COLORS.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {Object.keys(initialNames).map((key) => (
          <ColorBox
            key={key}
            nameKey={key}
            name={names[key]}
            color={key === selected ? color : "#eee"}
            onNameChange={handleChangeName}
          />
        ))}
      </div>
    </div>
  );
}
