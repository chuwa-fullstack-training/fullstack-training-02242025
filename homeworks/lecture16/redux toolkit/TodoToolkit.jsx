import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, setAllCompleted } from "./redux/todoSlice";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [isAllDoneChecked, setAllDoneChecked] = useState(false);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
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
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleAddTodo}
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
      <ul className="todoList">
        {todos.map((todo) => (
          <li className="todoItem" key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
