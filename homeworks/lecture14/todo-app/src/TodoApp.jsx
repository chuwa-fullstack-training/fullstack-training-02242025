import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(1);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: nextId,
        value: input,
        done: false
      }]);
      setNextId(nextId + 1);
      setInput('');
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const checkAll = () => {
    setTodos(todos.map(todo => ({...todo, done: true})));
  };

  const clearAll = () => {
    setTodos(todos.map(todo => ({...todo, done: false})));
  };

  const remainingTask = todos.filter(todo => !todo.done).length;

  return (
    <div className="todo-app">
      <h1>To do list</h1>
      <div className="todo-input">
        <input 
          type="text"
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyPressed}
          placeholder='Add a task'
        />
      </div>

      <div className="button-group">
        <button className="btn btn-check-all" onClick={checkAll}>
          Check All
        </button>
        <button className="btn btn-clear-all" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <div className="remaining-count">
        {remainingTask} remaining
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;