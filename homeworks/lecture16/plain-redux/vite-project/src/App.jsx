import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  clearCompleted,
  markAllCompleted,
} from "./todosSlice";
import TodoItem from "./TodoItem";
import "./App.css";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="container">
      <h2>Todo List (Redux Toolkit)</h2>
      <div className="input-area">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={(id) => dispatch(toggleTodo(id))}
          />
        ))}
      </ul>
      <div className="btn-group">
        <button onClick={() => dispatch(markAllCompleted())}>Mark All</button>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </button>
      </div>
      <p>{todos.filter((t) => !t.completed).length} tasks remaining</p>
    </div>
  );
}
