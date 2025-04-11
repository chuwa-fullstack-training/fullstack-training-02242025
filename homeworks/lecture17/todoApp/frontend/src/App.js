import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  markAll,
  clearAllDone,
} from "./redux/todoSlice";

export default function Hw3() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const inputRef = useRef();

  const handleaddTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(e.target.value));
      inputRef.current.value = "";
    }
  };

  const handleChange = (index) => {
    dispatch(updateTodo(index));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div style={{ width: "100%", textAlign: "center", margin: "5px" }}>
        Todos -ReactJs
      </div>
      <div style={{ width: "100%" }}>
        <input
          type="text"
          onKeyDown={handleaddTodo}
          ref={inputRef}
          style={{ width: "100%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "5px",
        }}
      >
        {todos.filter((todo) => todo.completed === false).length} remaining
        <button
          onClick={() => dispatch(clearAllDone())}
          style={{ color: "grey", background: "white", padding: "3px" }}
        >
          Clear Completed Todos
        </button>
      </div>
      <div
        className="todolist"
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch(markAll())}
            checked={todos.length > 0 && todos.every((todo) => todo.completed)}
          />
          Mark All as Done
        </label>
        {todos.map((todo, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChange(index)}
              />
              {todo.text}
            </label>
          );
        })}
      </div>
    </div>
  );
}
