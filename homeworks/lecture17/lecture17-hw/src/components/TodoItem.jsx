import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo._id))}
        />
        {todo.title}
      </label>
      <button onClick={() => dispatch(deleteTodo(todo._id))}>❌</button>
    </li>
  );
}
