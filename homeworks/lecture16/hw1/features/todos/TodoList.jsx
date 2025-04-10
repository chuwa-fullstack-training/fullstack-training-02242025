import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, markAllCompleted, clearCompleted } from './todosSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const activeCount = todos.filter(todo => !todo.completed).length;

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Todo List (Redux)</h2>
      <input
        type="text"
        value={input}
        placeholder="Add a todo"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(idx))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => dispatch(markAllCompleted())}>Mark All Completed</button>
        <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
        <p>{activeCount} active todo{activeCount !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default TodoList;
