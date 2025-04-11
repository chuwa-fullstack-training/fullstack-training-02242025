import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todosReducer from './features/todosSlice';
import {
  fetchTodos, addTodo, toggleTodo, clearCompleted
} from './features/todosThunk';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const loading = useSelector(state => state.todos.loading);
  const error = useSelector(state => state.todos.error);
  const [input, setInput] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todos - Fullstack</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleAdd}
        placeholder="Add todo"
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch(toggleTodo(todo._id))}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
    </div>
  );
}

export default App;
