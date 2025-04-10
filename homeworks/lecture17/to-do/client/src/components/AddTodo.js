import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { addingTodo, addError } = useSelector(state => state.todos);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };
  
  return (
    <>
      {addError && <div className="error-message">
        Error adding todo: {addError}
      </div>}
      
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="todo-input"
          placeholder="Add a new task..."
          disabled={addingTodo}
        />
        <button 
          type="submit" 
          className="add-button"
          disabled={addingTodo}
        >
          {addingTodo ? 'Adding...' : 'Add'}
        </button>
      </form>
    </>
  );
};

export default AddTodo;