import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './redux/todoSlice';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { clearCompleted } from './redux/todoSlice';
export default function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.todos);
  const todos = useSelector((state) => state.todos.list);
  const remaining = todos.filter(todo => !todo.completed).length;
  
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="todo-container">
      <h1>Todo List with Redux Thunk</h1>
      <p>{remaining} tasks remaining</p>

      <TodoInput />
      <div style={{ marginTop: '1rem' }}>
  <button onClick={() => dispatch(clearCompleted())}>
    Clear Completed
  </button>
</div>


      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      

      <TodoList />
    </div>
  );
}
