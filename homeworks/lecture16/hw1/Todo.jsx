import React, { useState } from "react";
import "./todo.css";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const remaining = todoList.filter((todo) => !todo.isCompleted).length;

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        isCompleted: false,
      };
      setTodoList([...todoList, newTodo]);
      setInputValue("");
    }
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const setAllComplete = (e) => {
    const done = todoList.every((todo) => todo.isCompleted);
    if ((e.target.checked && !done) || (!e.target.checked && done)) {
      setTodoList(todoList.map((todo) => ({ ...todo, isCompleted: !done })));
    }
  };

  const clearComplete = () => {
    setTodoList(todoList.map((todo) => ({ ...todo, isCompleted: false })));
  };

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
        <input type="checkbox" onChange={setAllComplete} />
        Mark All Done
      </label>
      <ul className="todoList">
        {todoList.map((todo) => (
          <li className="todoItem" key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
