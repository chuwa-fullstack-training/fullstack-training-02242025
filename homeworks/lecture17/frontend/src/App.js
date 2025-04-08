import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./components/Todo";
import store from "./store";
import {
  loadTodos,
  createTodo,
  toggleTodoStatus,
  removeTodo,
  setInputValue,
} from "./store/actions/todoActions";
import "./App.css";

function TodoApp() {
  const todos = useSelector((state) => state.todos);
  const inputValue = useSelector((state) => state.inputValue);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(createTodo(inputValue.trim()));
    }
  };

  const toggleTodo = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const activeTodosCount =
    todos.filter((todo) => todo.done === false).length || 0;

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Todos - ReactJs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a todo and hit Enter"
          className="todo-input"
        />
        <button type="submit" className="submit-button">
          Add Todo
        </button>
      </form>
      <div className="todo-stats">
        <span>{activeTodosCount} remaining</span>
      </div>
      <div className="todo-list">
        {todos.length > 0 &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TodoApp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
