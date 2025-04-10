import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, checkAll, clearAll } from "../redux/todoSlice";
import "../App.css";


function App() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleInput = (e) => setInput(e.target.value);

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      dispatch(addTodo(input));
      setInput('');
    }
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
        <button className="btn btn-check-all" onClick={() => dispatch(checkAll())}>
          Check All
        </button>
        <button className="btn btn-clear-all" onClick={() => dispatch(clearAll())}>
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
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
