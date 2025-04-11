import React, { useState } from 'react';
import './hw1.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setTodos([...todos, { text: input.trim(), done: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const markAllDone = () => {
    setTodos(todos.map(todo => ({ ...todo, done: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const remaining = todos.filter(todo => !todo.done).length;

  return (
    <div className="todo-container">
      <h1>Todos - ReactJs</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTodo}
        className="todo-input"
      />
      <div className="actions">
        <span>{remaining} remaining</span>
        <button onClick={clearCompleted}>Clear Completed Todos</button>
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={markAllDone} /> Mark All Done
        </label>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(index)}
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
