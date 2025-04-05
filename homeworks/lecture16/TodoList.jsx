import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputValue,
  addTodo,
  toggleTodo,
  markAllCompleted,
  clearCompleted,
} from "./todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, inputValue } = useSelector((state) => state.todos);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      dispatch(addTodo(inputValue.trim()));
      dispatch(setInputValue(""));
    }
  };

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Todos - React Redux</h2>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
      />

      <div style={{ marginBottom: "0.5rem" }}>
        <strong>{activeCount}</strong> remaining
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => dispatch(markAllCompleted())}>
          Mark All Done
        </button>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                style={{ marginRight: "8px" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
