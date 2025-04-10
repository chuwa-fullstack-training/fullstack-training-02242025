import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchTodos, 
  addTodoAsync, 
  toggleTodoAsync, 
  checkAllAsync, 
  clearAllAsync,
  selectAllTodos,
  getTodosStatus,
  getTodosError
} from "./redux/todoSlice";
import "./App.css";

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(selectAllTodos);
  const status = useSelector(getTodosStatus);
  const error = useSelector(getTodosError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleInput = (e) => setInput(e.target.value);

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodoAsync(input));
      setInput('');
    }
  };

  const remainingTask = todos.filter(todo => !todo.done).length;


  if (status === 'failed') {
    return <div className="todo-app">Error: {error}</div>;
  }

  return (
    <div className="todo-app">
      <h1>To do list</h1>
      
      <div className="todo-input-container">
        <input 
          type="text"
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyPressed}
          placeholder='Add a task'
        />
        <button 
          className="add-btn"
          onClick={handleAddTodo}
          disabled={!input.trim()}
        >
          Add
        </button>
      </div>

      <div className="button-group">
        <button 
          className="btn btn-check-all" 
          onClick={() => dispatch(checkAllAsync())}
          disabled={remainingTask === 0 || todos.length === 0}
        >
          Check All
        </button>
        <button 
          className="btn btn-clear-all" 
          onClick={() => dispatch(clearAllAsync())}
          disabled={remainingTask === todos.length || todos.length === 0}
        >
          Clear All
        </button>
      </div>

      <div className="remaining-count">
        {remainingTask} remaining
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo._id} className={`todo-item ${todo.done ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch(toggleTodoAsync(todo._id))}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.todo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;