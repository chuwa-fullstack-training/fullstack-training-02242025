import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addNewTodo, updateTodo, deleteTodo } from "./todosSlice";

function App() {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todos);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      dispatch(addNewTodo({ title: newTodoTitle.trim() }));
      setNewTodoTitle("");
    }
  };

  const handleToggleTodo = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  let content;
  if (status === "loading") {
    content = <p>Loading todos...</p>;
  } else if (status === "failed") {
    content = <p>Error: {error}</p>;
  } else if (status === "succeeded") {
    content = (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ marginBottom: "0.5rem" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo)}
                style={{ marginRight: "8px" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </label>
            <button
              onClick={() => handleDeleteTodo(todo._id)}
              style={{ marginLeft: "1rem" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Todo List</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="New todo title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          style={{ width: "80%", padding: "8px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", marginLeft: "8px" }}
        >
          Add Todo
        </button>
      </form>
      <div style={{ marginTop: "1rem" }}>{content}</div>
    </div>
  );
}

export default App;