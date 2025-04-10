import React, { useState, useCallback, useMemo } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = useCallback(() => {
    if (input.trim() === '') return;
    setTodos(prev => [...prev, { text: input.trim(), completed: false }]);
    setInput('');
  }, [input]);

  const toggleTodo = useCallback((index) => {
    setTodos(prev => {
      const updated = [...prev];
      updated[index].completed = !updated[index].completed;
      return updated;
    });
  }, []);

  const markAllCompleted = useCallback(() => {
    setTodos(prev => prev.map(todo => ({ ...todo, completed: true })));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }, []);

  const activeCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  );

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTodo()}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} onToggle={() => toggleTodo(idx)} />
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
