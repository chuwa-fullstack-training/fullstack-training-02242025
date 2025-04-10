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
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      dispatch(setInputValue(""));
    }
  };

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
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
      <h2>Todos - React Redux</h2>

      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />

      <div style={styles.status}>
        <strong>{activeCount}</strong> remaining
      </div>

      <div style={styles.buttons}>
        <button onClick={() => dispatch(markAllCompleted())}>
          Mark All Done
        </button>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
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