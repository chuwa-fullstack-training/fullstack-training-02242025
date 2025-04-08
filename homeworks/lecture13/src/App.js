import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";
import PhoneLayout from "./components/PhoneLayout";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue.trim(), completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllDone = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="App">
      <h1>Todos - ReactJs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a todo and hit Enter"
          className="todo-input"
        />
      </form>
      <div className="todo-stats">
        <span>{activeTodosCount} remaining</span>
        <button onClick={clearCompleted} className="clear-completed">
          Clear Completed Todos
        </button>
      </div>
      <label className="mark-all">
        <input
          type="checkbox"
          checked={todos.length > 0 && todos.every((todo) => todo.completed)}
          onChange={markAllDone}
        />
        Mark All Done
      </label>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="nav-menu">
        <Link to="/">Todo List</Link>
        <Link to="/phone">Phone Layout</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/phone" element={<PhoneLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
