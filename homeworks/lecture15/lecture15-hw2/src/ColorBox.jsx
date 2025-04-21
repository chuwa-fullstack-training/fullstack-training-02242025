export default function ColorBox({ id, name, color, isSelected, onRename }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "120px",
        height: "120px",
        border: isSelected ? "3px solid black" : "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxSizing: "border-box",
        fontFamily: "Arial",
      }}
    >
      <label>Component name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => onRename(id, e.target.value)}
        style={{ width: "100%", marginTop: "6px" }}
      />
    </div>
  );
}
