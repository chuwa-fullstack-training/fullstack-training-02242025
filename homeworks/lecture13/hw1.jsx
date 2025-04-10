import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input.trim(), completed: false }]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const markAllCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(idx)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        <button onClick={markAllCompleted}>Mark All Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
        <p>{activeCount} active todo{activeCount !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default TodoApp;
