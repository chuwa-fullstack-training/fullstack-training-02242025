import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodoAsync, deleteTodoAsync } from './todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>
          <button onClick={() => dispatch(toggleTodoAsync(todo._id))}>
            {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button onClick={() => dispatch(deleteTodoAsync(todo._id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
