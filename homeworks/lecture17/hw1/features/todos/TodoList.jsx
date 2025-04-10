import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTodos, addTodo, toggleTodo, clearCompleted
} from './todosSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector(state => state.todos);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <h2>Todo List (Redux Thunk)</h2>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo._id))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
