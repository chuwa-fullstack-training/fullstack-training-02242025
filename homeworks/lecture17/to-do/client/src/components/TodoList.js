import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { items, updateError } = useSelector(state => state.todos);
  
  if (items.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }
  
  return (
    <div>
      {updateError && <div className="error-message">
        Error updating todo: {updateError}
      </div>}
      
      <div className="todo-list">
        {items.map(todo => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;