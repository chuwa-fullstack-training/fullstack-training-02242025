import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
  setAllCompleted,
} from "./todoSlice";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [isAllDoneChecked, setAllDoneChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = (e) => {
    if (e.key === "Enter" && newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, newText: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  const handleSetAllCompleted = (e) => {
    const done = todos.every((todo) => todo.completed);

    if ((e.target.checked && !done) || (!e.target.checked && done)) {
      dispatch(setAllCompleted(e.target.checked));
    }

    setAllDoneChecked(!isAllDoneChecked);
  };

  const clearComplete = () => {
    dispatch(setAllCompleted(false));
    setAllDoneChecked(false);
  };

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="container">
      <h1>Todos - ReactJS</h1>
      <input
        className="input"
        type="text"
        placeholder="Type a todo and hit Enter"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleAdd}
      />

      <div className="controls">
        <p>{remaining} remaining</p>
        <button className="clearButton" onClick={clearComplete}>
          Clear Completed Todos
        </button>
      </div>
      <label className="markDone">
        <input
          type="checkbox"
          checked={isAllDoneChecked}
          onChange={handleSetAllCompleted}
        />
        Mark All Done
      </label>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul className="todoList">
        {todos.map((todo) => (
          <li className="todoItem" key={todo.id}>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {editingId === todo.id ? (
                <>
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(todo.id)}>Save</button>
                </>
              ) : (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setEditingText(todo.text);
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
