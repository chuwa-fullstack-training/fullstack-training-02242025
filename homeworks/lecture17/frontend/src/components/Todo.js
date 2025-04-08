import React from "react";

function Todo({ todo, onToggle, onDelete }) {
  return (
    <div
      key={todo.id}
      className={`todo-item ${todo.done ? "completed" : ""}`}
    >
      <label>
        <input type="checkbox" checked={todo.done} onChange={onToggle} />
        <span>{todo.todo}</span>
      </label>
      <button onClick={onDelete} className="delete-todo">
        ×
      </button>
    </div>
  );
}

export default Todo;
