export default function ColorBox({ nameKey, name, color, onNameChange }) {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: color,
        padding: "10px",
      }}
    >
      <p>Component name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(nameKey, e.target.value)}
      />
    </div>
  );
}
