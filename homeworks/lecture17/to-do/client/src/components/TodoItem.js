import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { updatingTodo } = useSelector(state => state.todos);
  
  const handleToggle = () => {
    dispatch(updateTodo(todo._id, { done: !todo.done }));
  };
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleToggle}
        className="todo-checkbox"
        disabled={updatingTodo}
      />
      <span className={`todo-text ${todo.done ? 'completed' : ''}`}>
        {todo.todo}
      </span>
    </div>
  );
};

export default TodoItem;