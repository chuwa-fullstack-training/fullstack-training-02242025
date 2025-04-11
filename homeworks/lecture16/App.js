import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, markAllDone, clearCompleted } from "./todosSlice";
import "./styles.css";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    if (e.key === "Enter" && input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <div className="todo-container">
      <h1>Todos - ReactJs (with Redux)</h1>
      <input
        className="todo-input"
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAdd}
      />
      <div className="actions">
        <span>{remaining} remaining</span>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={() => dispatch(markAllDone())} />
          Mark All Done
        </label>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch(toggleTodo(index))}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
