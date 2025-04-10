import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './actions/todoActions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.todos);
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodo />
      
      {error && <div className="error-message">
        Error: {error}
      </div>}
      
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <TodoList />
      )}
    </div>
  );
}

export default App;