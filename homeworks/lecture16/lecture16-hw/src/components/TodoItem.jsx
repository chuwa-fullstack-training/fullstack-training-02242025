import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/todoSlice';

export default function TodoItem({ todo, index }) {
  const dispatch = useDispatch();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => dispatch(toggleTodo(index))}
        />
        {todo.text}
      </label>
    </li>
  );
}
