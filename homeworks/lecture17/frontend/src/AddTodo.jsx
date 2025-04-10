import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
