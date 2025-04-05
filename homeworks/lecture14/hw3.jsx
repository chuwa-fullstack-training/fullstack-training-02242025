import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new todo
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      // update todos
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue(""); // clear
    }
  };

  // update todo state
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: true }))
    );
  };

  // Clear
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // calculate untodo
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Todos - ReactJs</h2>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
      />

      <div style={{ marginBottom: "0.5rem" }}>
        <strong>{activeCount}</strong> remaining
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={markAllCompleted}>Mark All Done</button>
        <button onClick={clearCompleted}>Clear Completed Todos</button>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
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
