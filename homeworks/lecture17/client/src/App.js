import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo } from './features/todos/todoThunks';
import TodoItem from './components/TodoItem';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const todosState = useSelector(state => state.todos); // full reducer slice

  const items = Array.isArray(todosState?.items) ? todosState.items : [];
  const loading = todosState?.loading;
  const error = todosState?.error;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {items.map(todo => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
      <p><strong>{items.filter(t => !t.completed).length}</strong> task(s) remaining</p>
    </div>
  );
}

export default App;
