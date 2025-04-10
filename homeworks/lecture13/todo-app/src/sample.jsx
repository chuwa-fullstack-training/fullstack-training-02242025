import { useState, useRef } from "react";
const ToDo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const idRef = useRef(0);
  const getId = () => idRef.current++;

  const handleCheck = (index) => {
    if (checkedItems.has(index)) {
      const newSet = new Set(checkedItems);
      newSet.delete(index);
      setCheckedItems(newSet);
    } else {
      setCheckedItems((prev) => new Set([...prev, index]));
    }
  };

  const handleClearDoneItems = () => {
    setItems((prev) => prev.filter((value) => !checkedItems.has(value.id)));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "300px",
        }}
      >
        <h2>Todos - ReactJs</h2>
        <input
          value={input}
          placeholder={"Type a todo and hit enter"}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setItems((prev) => [...prev, { id: getId(), value: input }]);
            }
          }}
          style={{ padding: "5px", width: "100%" }}
        />
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>{`${items.length} remaining`}</span>
          <button
            style={{
              padding: "4px",
              background: "white",
              border: "solid 0.5px grey",
            }}
            onClick={() => handleClearDoneItems()}
          >
            {" "}
            Clear Completed Todos
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCheckedItems(new Set(items.map((item) => item.id)));
              } else {
                setCheckedItems(new Set());
              }
            }}
          />
          <span style={{ fontSize: "0.8rem" }}> Mark All Done</span>
        </div>
        <div style={{ marginTop: "10px", width: "100%" }}>
          {items.map((value, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                border: "solid 0.3px grey",
                padding: "4px",
              }}
            >
              <input
                type="checkbox"
                onChange={() => handleCheck(value.id)}
                checked={checkedItems.has(value.id)}
              />
              <span> {value.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
