import React, { useState } from "react";
import "./hw3.css";


function TodoInput({ input, setInput, addTodo }) {
  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={addTodo}
      className="todo-input"
    />
  );
}

function TodoItem({ todo, index, toggleTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(index)}
        />
        {todo.text}
      </label>
    </li>
  );
}

function TodoList({ todos, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

function TodoHooksApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    if (e.key === "Enter" && input.trim()) {
      setTodos([...todos, { text: input.trim(), done: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const markAllDone = () => {
    setTodos(todos.map((todo) => ({ ...todo, done: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <div className="todo-container">
      <h1>Todo List - Hooks Edition</h1>

      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />

      <div className="actions">
        <span>{remaining} remaining</span>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>

      <div>
        <label>
          <input type="checkbox" onChange={markAllDone} /> Mark All Done
        </label>
      </div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoHooksApp;
