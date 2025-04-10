import React from 'react';
import TodoForm from './features/todos/TodoForm';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;