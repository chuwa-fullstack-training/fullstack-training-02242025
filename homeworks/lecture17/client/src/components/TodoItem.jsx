// src/components/TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todoThunks';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => dispatch(toggleTodo(todo._id))}>
        {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
