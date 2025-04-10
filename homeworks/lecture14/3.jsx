import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllCompleted = () => {
    setTodos((prev) => prev.map((todo) => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "2rem auto",
      fontFamily: "sans-serif",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "1rem",
    },
    status: {
      marginBottom: "0.5rem",
    },
    buttons: {
      display: "flex",
      gap: "1rem",
      marginBottom: "1rem",
    },
    list: {
      listStyle: "none",
      paddingLeft: 0,
    },
    listItem: {
      marginBottom: "0.5rem",
    },
    checkbox: {
      marginRight: "8px",
    },
    todoText: (completed) => ({
      textDecoration: completed ? "line-through" : "none",
    }),
  };

  return (
    <div style={styles.container}>
      <h2>Todos - ReactJs</h2>

      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />

      <div style={styles.status}>
        <strong>{activeCount}</strong> remaining
      </div>

      <div style={styles.buttons}>
        <button onClick={markAllCompleted}>Mark All Done</button>
        <button onClick={clearCompleted}>Clear Completed Todos</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={styles.checkbox}
              />
              <span style={styles.todoText(todo.completed)}>{todo.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;