import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from './todoSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodoAsync(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;