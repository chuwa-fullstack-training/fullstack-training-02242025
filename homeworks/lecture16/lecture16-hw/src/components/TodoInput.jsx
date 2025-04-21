import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="Type a todo and hit Enter"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
