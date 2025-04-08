import React from "react";

function Todo({ todo, onToggle }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span>{todo.text}</span>
      </label>
    </div>
  );
}

export default Todo;
