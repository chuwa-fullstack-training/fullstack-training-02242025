import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./components/Todo";
import store from "./store";
import "./App.css";

function TodoApp() {
  const todos = useSelector((state) => state.todos);
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: inputValue.trim() });
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const markAllDone = () => {
    dispatch({ type: "MARK_ALL_DONE" });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

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
      </form>
      <div className="todo-stats">
        <span>{activeTodosCount} remaining</span>
        <button onClick={clearCompleted} className="clear-completed">
          Clear Completed Todos
        </button>
      </div>
      <label className="mark-all">
        <input
          type="checkbox"
          checked={todos.length > 0 && todos.every((todo) => todo.completed)}
          onChange={markAllDone}
        />
        Mark All Done
      </label>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
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
